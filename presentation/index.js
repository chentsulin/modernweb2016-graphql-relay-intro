// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  CodePane,
  Deck,
  Fill,
  Fit,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Slide,
  Spectacle,
  Text
} from "spectacle";

import CodeSlide from "spectacle-code-slide";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  ctlin: require("../assets/ctlin.jpg"),
  logos: require("../assets/logos.png"),
  graphiql: require("../assets/graphiql.png"),
  fake: require("../assets/fake.png")
};

preloader(images);

const theme = createTheme({
  primary: "#7688EA"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={4} lineHeight={2} textColor="black">
              Data Fetching 的過去與未來
            </Heading>
            <Heading size={5} fix textColor="white">
              － from REST to GraphQL + Relay
            </Heading>
            <Text textSize="1.5em" lineHeight={1} margin="120px 0px 0px" bold>@chentsulin</Text>
          </Slide>
          <Slide transition={["zoom"]} bgColor="primary">
            <Layout>
              <Fill>
                <Image src={images.ctlin.replace("/", "")} margin="0px auto" style={{borderRadius: "50%"}} />
              </Fill>
              <Fill>
                <Heading size={3} lineHeight={1} textColor="black">
                  <Text textSize="1.5em">C. T. Lin</Text>
                  <Text textSize="0.4em">Engineering Technical Lead@Yoctol</Text>
                </Heading>
                <List>
                  <ListItem>
                    Node, React, GraphQL..
                  </ListItem>
                  <ListItem>
                    <Link target="_blank" href="https://github.com/chentsulin">chentsulin@github</Link>
                  </ListItem>
                  <ListItem>
                    <Link target="_blank" href="https://twitter.com/chentsulin">chentsulin@twitter</Link>
                  </ListItem>
                </List>
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["slide"]}>
            <Image src={images.logos.replace("/", "")} />
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading caps fit>Release</Heading>
            <Layout>
              <Fill>
                <Appear fid="1">
                  <Heading size={4} textColor="secondary" bgColor="white" margin={10}>
                    GraphQL<br /> 2015/07
                  </Heading>
                </Appear>
              </Fill>
              <Fill>
                <Appear fid="2">
                  <Heading size={4} textColor="secondary" bgColor="white" margin={10}>
                    Relay<br /> 2015/08
                  </Heading>
                </Appear>
              </Fill>
              <Fill>
                <Appear fid="3">
                  <Heading size={4} textColor="secondary" bgColor="white" margin={10}>
                    GraphiQL<br /> 2015/08
                  </Heading>
                </Appear>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={5} lineHeight={1} textColor="black">
              <Text>REST</Text>
            </Heading>
            <List>
              <Appear><ListItem>Method: GET, POST, PUT, DELETE</ListItem></Appear>
              <Appear><ListItem>Path: /resources, /resources/:id</ListItem></Appear>
              <Appear><ListItem>Status Code: 200, 400, 401, 403, 404...</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={5} lineHeight={1} textColor="black">
              <Text>Problems with REST</Text>
            </Heading>
            <List>
              <Appear><ListItem>Nested releations</ListItem></Appear>
              <Appear><ListItem>Not efficient with bad network</ListItem></Appear>
              <Appear><ListItem>Versioning</ListItem></Appear>
              <Appear><ListItem>Growing amount of api endpoints</ListItem></Appear>
              <Appear><ListItem>Legacy endpoints and fields</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={["zoom"]} bgColor="primary">
            <Layout>
              <Fit>
                <Image src={images.fake.replace("/", "")} margin="0px auto" height="90vh" />
              </Fit>
              <Fill>
                <div style={{ marginLeft: "30px" }}>
                  <List>
                    <Appear><ListItem>/posts/:id</ListItem></Appear>
                    <Appear><ListItem>/posts/:id/comments</ListItem></Appear>
                    <Appear><ListItem>/posts/:id/likers</ListItem></Appear>
                    <Appear><ListItem>/users/:id</ListItem></Appear>
                    <Appear><ListItem>/comments/:id/replies</ListItem></Appear>
                    <Appear><ListItem>/comments/:id/likers</ListItem></Appear>
                  </List>
                  <Appear><Text>Or something like..</Text></Appear>
                  <List>
                    <Appear><ListItem>/post-with-comments-and-replies/:id</ListItem></Appear>
                  </List>
                </div>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={3} lineHeight={1} textColor="black">
              <Text textSize="1.5em">Easy to over-fetching and under-fetching!</Text>
            </Heading>
          </Slide>

          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={3} fit lineHeight={1} textColor="black">
              <Text>GraphQL comes in</Text>
            </Heading>
          </Slide>

          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={5} lineHeight={1} textColor="black">
              <Text>GraphQL</Text>
            </Heading>
            <List>
              <Appear><ListItem>From facebook mobile team (newsfeed)</ListItem></Appear>
              <Appear><ListItem>260 billion requests/day (2015)</ListItem></Appear>
              <Appear><ListItem>Used for 4 years</ListItem></Appear>
              <Appear><ListItem>One schema for all facebook data</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={["zoom"]} bgColor="primary">
            <Text textSize="2em" margin="25px">GraphQL Query</Text>
            <Layout>
              <div style={{ width: "450px", margin: "0 20px" }}>
                <Heading size={4} textColor="secondary" bgColor="white" margin={10}>
                  Query
                </Heading>
                <CodePane
                  lang="jsx"
                  source={require("raw!../assets/codes/graphql-query.example")}
                  margin="20px auto"
                  textSize="0.8em"
                />
              </div>
              <div style={{ width: "450px", margin: "0 20px" }}>
                <Heading size={4} textColor="secondary" bgColor="white" margin={10}>
                  Response
                </Heading>
                <CodePane
                  lang="jsx"
                  source={require("raw!../assets/codes/graphql-response.example")}
                  margin="20px auto"
                  textSize="0.8em"
                />
              </div>
            </Layout>
          </Slide>

          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={3} fit lineHeight={1} textColor="black">
              <Text>Just like json without values!</Text>
            </Heading>
          </Slide>

          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={3} fit lineHeight={1} textColor="black">
              <Text>Single endpoint (usually /graphql)</Text>
              <Text>No more api endpoints!</Text>
            </Heading>
          </Slide>

          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={3} fit lineHeight={1} textColor="black">
              <Text>Only fetch what we need</Text>
            </Heading>
          </Slide>

          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={3} fit lineHeight={1} textColor="black">
              <Text>Type System</Text>
            </Heading>
          </Slide>

          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={5} lineHeight={1} textColor="black">
              <Text>Schema</Text>
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/codes/graphql-schema.example")}
              margin="20px auto"
              textSize="0.8em"
            />
          </Slide>

          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={5} lineHeight={1} textColor="black">
              <Text>Types</Text>
            </Heading>
            <List>
              <ListItem>Scalar(Int, Float, String, Boolean, ID)</ListItem>
              <ListItem>Object</ListItem>
              <ListItem>Interface</ListItem>
              <ListItem>Union</ListItem>
              <ListItem>Enum</ListItem>
              <ListItem>InputObject</ListItem>
              <ListItem>List</ListItem>
              <ListItem>NonNull</ListItem>
            </List>
          </Slide>

          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={5} lineHeight={1} textColor="black">
              <Text>Future Ecosystem</Text>
            </Heading>
            <List>
              <Appear><ListItem>documentation tools</ListItem></Appear>
              <Appear><ListItem>editor plugins</ListItem></Appear>
              <Appear><ListItem>testing tools</ListItem></Appear>
              <Appear><ListItem>linter</ListItem></Appear>
            </List>
          </Slide>


          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={6} lineHeight={1} textColor="black">
              <Text>GraphiQL</Text>
            </Heading>
            <Image src={images.graphiql.replace("/", "")} margin="0px auto 40px" width="1024px"/>
          </Slide>

          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={3} fit lineHeight={1} textColor="black">
              <Text>Relay</Text>
            </Heading>
          </Slide>

          <CodeSlide
            transition={[]}
            lang="js"
            code={require("raw!../assets/codes/relay-simple-schema.example")}
            ranges={[
              { loc: [32, 43], title: "GraphQL Schema" },
              { loc: [25, 31], note: "Store Type" },
              { loc: [17, 24], note: "Tea Type" },
              { loc: [9, 16], note: "Store data" },
              { loc: [35, 41], note: "Store Resolving function" }
            ]}
          />

          <CodeSlide
            transition={[]}
            lang="js"
            code={require("raw!../assets/codes/relay-simple.example")}
            ranges={[
              { loc: [0, 1], title: "Relay Frontend" },
              { loc: [0, 2], note: "Plain React Component" },
              { loc: [3, 5], note: "Co-locate data requirement with Component" },
              { loc: [6, 9], note: "Run on Android." }
            ]}
          />

          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={5} lineHeight={1} textColor="black">
              <Text>Co-locate All the things with Component</Text>
            </Heading>
            <List>
              <Appear><ListItem>JavaScript</ListItem></Appear>
              <Appear><ListItem>HTML (jsx)</ListItem></Appear>
              <Appear><ListItem>CSS (CSS in JS, CSS Modules..)</ListItem></Appear>
              <Appear><ListItem>Data Requirement (Relay)</ListItem></Appear>
              <Appear><ListItem>Tests (__tests__)</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={5} lineHeight={1} textColor="black">
              <Text>Data Masking</Text>
            </Heading>
            <List>
            </List>
          </Slide>

          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={5} lineHeight={1} textColor="black">
              <Text>Minimize query</Text>
            </Heading>
            <Layout>
              <div style={{ width: "450px", margin: "0 20px" }}>
                <CodePane
                  lang="jsx"
                  source={require("raw!../assets/codes/min-query.example")}
                  margin="20px auto"
                  textSize="0.6em"
                />
              </div>
              <Fill>
                <List>
                  <ListItem>Avoid N+1 Query</ListItem>
                  <ListItem>Single Network Request</ListItem>
                </List>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={5} lineHeight={1} textColor="black">
              <Text>Cache</Text>
            </Heading>
            <Layout>
              <div style={{ width: "450px", margin: "0 20px" }}>
                <CodePane
                  lang="jsx"
                  source={require("raw!../assets/codes/cache.example")}
                  margin="20px auto"
                  textSize="0.6em"
                />
              </div>
              <Fill>
                <List>
                  <ListItem>Normalize</ListItem>
                  <ListItem>Immutable</ListItem>
                  <ListItem>Views subscribe Record IDs</ListItem>
                </List>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={5} lineHeight={1} textColor="black">
              <Text>Default Network Layer</Text>
            </Heading>
            <List>
              <Appear><ListItem>Fail requests after a 15 second timeout</ListItem></Appear>
              <Appear><ListItem>failed requests are automatically retried twice</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={5} lineHeight={1} textColor="black">
              <Text>Optiomistic UI</Text>
            </Heading>
            <List>
            </List>
          </Slide>

          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={5} lineHeight={1} textColor="black">
              <Text>Works on React Native!</Text>
            </Heading>
          </Slide>


          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={3} lineHeight={1} textColor="black">
              <Text textSize="1.5em">Resources</Text>
            </Heading>
            <List>
              <ListItem>
                <Link target="_blank" href="https://github.com/chentsulin/awesome-graphql">Awesome GraphQL</Link>
              </ListItem>
              <ListItem>
                <Link target="_blank" href="https://raw.githubusercontent.com/sogko/graphql-shorthand-notation-cheat-sheet/master/graphql-shorthand-notation-cheat-sheet.png">GraphQL Cheat Sheet</Link>
              </ListItem>
              <ListItem>
                <Link target="_blank" href="https://github.com/chentsulin/graphql.github.io">GraphQL 繁中文件</Link>
              </ListItem>
              <ListItem>
                <Link target="_blank" href="https://github.com/chentsulin/relay">Relay 繁中文件</Link>
              </ListItem>
            </List>
          </Slide>
          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading caps size={1} textColor="tertiary">
              End
            </Heading>
            <Heading size={4} textColor="secondary">
              Thank you for listening!
            </Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
