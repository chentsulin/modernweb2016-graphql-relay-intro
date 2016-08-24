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

import MyListItem from "./MyListItem";


// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  bg: require("../assets/bg.png"),
  bg2: require("../assets/bg2.png"),
  ctlin: require("../assets/ct.jpg"),
  graphql: require("../assets/graphql.png"),
  relay: require("../assets/relay.png"),
  graphiql: require("../assets/graphiql.png"),
  fake: require("../assets/fake.png"),
  container: require("../assets/container.png"),
  masking: require("../assets/masking.png")
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
          <Slide transition={["zoom"]} bgImage={images.bg.replace("/", "")}>
            <Heading size={4} lineHeight={2} textColor="black">
              Data Fetching 的過去與未來
            </Heading>
            <Heading size={5} fix textColor="white">
              － from REST to GraphQL + Relay
            </Heading>
            <Text textSize="1.5em" lineHeight={1.3} margin="120px 0px 0px" bold>@chentsulin</Text>
          </Slide>
          <Slide transition={["zoom"]} bgImage={images.bg2.replace("/", "")}>
            <Layout>
              <div style={{ width: "400px", margin: "0 50px 0 -50px" }}>
                <Image src={images.ctlin.replace("/", "")} width="400px" margin="0px auto" style={{borderRadius: "50%"}} />
              </div>
              <Fill>
                <Heading size={2} lineHeight={1.3}>
                  <Text textSize="1.5em" textColor="white">C. T. Lin</Text>
                  <Text textSize="0.3em" textColor="white">Engineering Technical Lead@Yoctol</Text>
                </Heading>
                <List>
                  <MyListItem>
                    JS, Node, React, GraphQL..
                  </MyListItem>
                  <MyListItem>
                    <Link target="_blank" href="https://github.com/chentsulin">chentsulin@github</Link>
                  </MyListItem>
                  <MyListItem>
                    <Link target="_blank" href="https://twitter.com/chentsulin">chentsulin@twitter</Link>
                  </MyListItem>
                </List>
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["slide"]} bgImage={images.bg2.replace("/", "")}>
            <Layout>
              <Fill>
                <Image src={images.graphql.replace("/", "")} width="350px" margin="0 auto" />
                <Heading size={4} textColor="white" margin={10}>
                  GraphQL
                </Heading>
              </Fill>
              <Fill>
                <Image src={images.relay.replace("/", "")} width="350px" margin="0 auto" />
                <Heading size={4} textColor="white" margin={10}>
                  Relay
                </Heading>
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgImage={images.bg2.replace("/", "")}>
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

          <Slide transition={["zoom"]} bgImage={images.bg2.replace("/", "")}>
            <Heading size={1} lineHeight={1.3} textColor="white">
              REST
            </Heading>
            <List>
              <MyListItem>Method: GET, POST, PUT, DELETE</MyListItem>
              <Appear><MyListItem>Path: /resources, /resources/:id</MyListItem></Appear>
              <Appear><MyListItem>Status Code: 200, 400, 401, 403, 404...</MyListItem></Appear>
            </List>
          </Slide>

          <Slide transition={["zoom"]} bgImage={images.bg2.replace("/", "")}>
            <Heading size={1} lineHeight={1.3} textColor="white">
              For Example
            </Heading>
            <List>
              <MyListItem>GET /posts</MyListItem>
              <MyListItem>POST /posts</MyListItem>
              <MyListItem>POST /posts/:id</MyListItem>
              <MyListItem>PUT /posts/:id</MyListItem>
              <MyListItem>DELETE /posts/:id</MyListItem>
            </List>
          </Slide>

          <Slide transition={["zoom"]} bgImage={images.bg2.replace("/", "")}>
            <Heading size={1} lineHeight={1.3} textColor="white">
              Problems with REST
            </Heading>
            <List>
              <MyListItem>Nested relations</MyListItem>
              <MyListItem>Not efficient with bad network</MyListItem>
              <MyListItem>Versioning</MyListItem>
              <MyListItem>Growing amount of api endpoints</MyListItem>
              <MyListItem>Legacy endpoints and fields</MyListItem>
            </List>
          </Slide>

          <Slide transition={["zoom"]} bgImage={images.bg2.replace("/", "")}>
            <Layout>
              <Fit>
                <Image src={images.fake.replace("/", "")} margin="0px auto" height="90vh" />
              </Fit>
              <Fill>
                <div style={{ marginLeft: "30px" }}>
                  <List>
                    <MyListItem>/posts/:id</MyListItem>
                    <MyListItem>/posts/:id/comments</MyListItem>
                    <MyListItem>/posts/:id/likers</MyListItem>
                    <MyListItem>/users/:id</MyListItem>
                    <MyListItem>/comments/:id/replies</MyListItem>
                    <MyListItem>/comments/:id/likers</MyListItem>
                  </List>
                  <Appear><Text textColor="white">Or something like..</Text></Appear>
                  <List>
                    <Appear><MyListItem>/post-with-comments-and-replies-and-likers/:id</MyListItem></Appear>
                  </List>
                </div>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["zoom"]} bgImage={images.bg2.replace("/", "")}>
            <Heading size={2} lineHeight={1.3} textColor="white">
              Easy to over-fetching<br /> and under-fetching!
            </Heading>
          </Slide>

          <Slide transition={["zoom"]} bgImage={images.bg2.replace("/", "")}>
            <Heading size={1} fit lineHeight={1.3} textColor="white">
              GraphQL comes in
            </Heading>
          </Slide>

          <Slide transition={["zoom"]} bgImage={images.bg2.replace("/", "")}>
            <Layout>
              <Fit>
                <Image src={images.fake.replace("/", "")} margin="0px auto" height="90vh" />
              </Fit>
              <Fill>
                <CodePane
                  lang="jsx"
                  source={require("raw!../assets/codes/fake.example")}
                  margin="0 20px 0"
                  textSize="0.6em"
                />
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["zoom"]} bgImage={images.bg2.replace("/", "")}>
            <Heading size={1} lineHeight={1.3} textColor="white">
              GraphQL
            </Heading>
            <List>
              <MyListItem>From facebook mobile team (newsfeed)</MyListItem>
              <MyListItem>260 billion requests/day (2015)</MyListItem>
              <MyListItem>Used for 4 years</MyListItem>
              <MyListItem>One schema for all facebook data</MyListItem>
            </List>
          </Slide>

          <Slide transition={["zoom"]} bgImage={images.bg2.replace("/", "")}>
            <Text textSize="2em" margin="25px" textColor="white">GraphQL Query</Text>
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

          <Slide transition={["zoom"]} bgImage={images.bg2.replace("/", "")}>
            <Heading size={2} fit lineHeight={1.3} textColor="white">
              Just like json without values!
            </Heading>
          </Slide>

          <Slide transition={["zoom"]} bgImage={images.bg2.replace("/", "")}>
            <Heading size={1} fit lineHeight={1.3} textColor="white">
              <Text textColor="white" lineHeight={1.3}>/graphql</Text>
              <Text textColor="white" lineHeight={1.3}>Single endpoint</Text>
              <Text textColor="white" lineHeight={1.3}>No more api endpoints!</Text>
            </Heading>
          </Slide>

          <Slide transition={["zoom"]} bgImage={images.bg2.replace("/", "")}>
            <Heading size={1} fit lineHeight={1.3} textColor="white">
              Only fetch what we need
            </Heading>
          </Slide>

          <Slide transition={["zoom"]} bgImage={images.bg2.replace("/", "")}>
            <Heading size={2} fit lineHeight={1.3} textColor="white">
              Type System
            </Heading>
          </Slide>

          <Slide transition={["zoom"]} bgImage={images.bg2.replace("/", "")}>
            <Heading size={2} lineHeight={1.3} textColor="white">
              Schema
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/codes/graphql-schema.example")}
              margin="20px auto"
              textSize="0.8em"
            />
          </Slide>

          <Slide transition={["zoom"]} bgImage={images.bg2.replace("/", "")}>
            <Heading size={2} lineHeight={1.3} textColor="white">
              Types
            </Heading>
            <List>
              <MyListItem>Scalar(Int, Float, String, Boolean, ID)</MyListItem>
              <MyListItem>Object</MyListItem>
              <MyListItem>Interface</MyListItem>
              <MyListItem>Union</MyListItem>
              <MyListItem>Enum</MyListItem>
              <MyListItem>InputObject</MyListItem>
              <MyListItem>List</MyListItem>
              <MyListItem>NonNull</MyListItem>
            </List>
          </Slide>

          <Slide transition={["zoom"]} bgImage={images.bg2.replace("/", "")}>
            <Heading size={2} lineHeight={1.3} textColor="white">
              GraphiQL
            </Heading>
            <Image src={images.graphiql.replace("/", "")} margin="0px auto 40px" />
          </Slide>

          <Slide transition={["zoom"]} bgImage={images.bg2.replace("/", "")}>
            <Heading size={1} lineHeight={1.3} textColor="white">
              <Link target="_blank" href="https://www.graphqlhub.com/playground?query=%7B%0A%20%20graphQLHub%0A%20%20github%20%7B%0A%20%20%20%20user(username%3A%20%22chentsulin%22)%20%7B%0A%20%20%20%20%20%20login%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20avatar_url%0A%20%20%20%20%7D%0A%20%20%20%20repo(ownerUsername%3A%20%22chentsulin%22%2C%20name%3A%20%22koa-graphql%22)%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20issues(limit%3A%203)%20%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20state%0A%20%20%20%20%20%20%20%20title%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20branches(limit%3A%202)%20%7B%0A%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20lastCommit%20%7B%0A%20%20%20%20%20%20%20%20%20%20...commit%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20commits(limit%3A%201)%20%7B%0A%20%20%20%20%20%20%20%20...commit%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A%0Afragment%20status%20on%20GithubStatus%20%7B%0A%20%20state%0A%20%20description%0A%20%20target_url%0A%20%20context%0A%20%20updated_at%0A%7D%0A%0Afragment%20commit%20on%20GithubCommit%20%7B%0A%20%20sha%0A%20%20message%0A%20%20status%20%7B%0A%20%20%20%20...status%0A%20%20%7D%0A%20%20author%20%7B%0A%20%20%20%20...%20on%20GithubUser%20%7B%0A%20%20%20%20%20%20login%0A%20%20%20%20%20%20id%0A%20%20%20%20%7D%0A%20%20%20%20...%20on%20GithubCommitAuthor%20%7B%0A%20%20%20%20%20%20email%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D">Demo</Link>
            </Heading>
          </Slide>

          <Slide transition={["zoom"]} bgImage={images.bg2.replace("/", "")}>
            <Heading size={1} lineHeight={1.3} textColor="white">
              Future Ecosystem
            </Heading>
            <List>
              <MyListItem>Documentation Tools</MyListItem>
              <MyListItem>Editor Plugins</MyListItem>
              <MyListItem>Testing Tools</MyListItem>
              <MyListItem>Linter</MyListItem>
            </List>
          </Slide>


          <Slide transition={["zoom"]} bgImage={images.bg2.replace("/", "")}>
            <Heading size={1} lineHeight={1.3} textColor="white">
              Relay
            </Heading>
          </Slide>

          <Slide transition={["zoom"]} bgImage={images.bg2.replace("/", "")}>
            <Heading size={6} lineHeight={1.3} textColor="white">
              Container
            </Heading>
            <Image src={images.container.replace("/", "")} margin="0px auto 40px" width="800px" />
          </Slide>

          <Slide transition={["zoom"]} bgImage={images.bg2.replace("/", "")}>
            <Heading size={5} lineHeight={1.3} textColor="white">
              Colocate All the things with Component
            </Heading>
            <List>
              <MyListItem>JavaScript</MyListItem>
              <MyListItem>HTML (jsx)</MyListItem>
              <MyListItem>CSS (CSS in JS, CSS Modules..)</MyListItem>
              <MyListItem>Data Requirement (Relay)</MyListItem>
              <MyListItem>Tests (__tests__)</MyListItem>
            </List>
          </Slide>

          <Slide transition={["zoom"]} bgImage={images.bg2.replace("/", "")}>
            <Heading size={5} lineHeight={1.3} textColor="white">
              Data Masking
            </Heading>
            <Image src={images.masking.replace("/", "")} margin="0px auto 40px" width="800px" />
          </Slide>

          <Slide transition={["zoom"]} bgImage={images.bg2.replace("/", "")}>
            <Heading size={5} lineHeight={1.3} textColor="white">
              Minimize query
            </Heading>
            <Layout>
              <div style={{ width: "480px", margin: "0 20px" }}>
                <CodePane
                  lang="jsx"
                  source={require("raw!../assets/codes/min-query.example")}
                  margin="20px auto"
                  textSize="0.6em"
                />
              </div>
              <Fill>
                <List>
                  <MyListItem>Avoid N+1 Query</MyListItem>
                  <MyListItem>Single Network Request</MyListItem>
                  <MyListItem>Diff with Cache</MyListItem>
                </List>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["zoom"]} bgImage={images.bg2.replace("/", "")}>
            <Heading size={5} lineHeight={1.3} textColor="white">
              Cache
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
                  <MyListItem>Normalize</MyListItem>
                  <MyListItem>Immutable</MyListItem>
                  <MyListItem>Views subscribe Record IDs</MyListItem>
                </List>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["zoom"]} bgImage={images.bg2.replace("/", "")}>
            <Heading size={5} lineHeight={1.3} textColor="white">
              Default Network Layer
            </Heading>
            <List>
              <Appear><MyListItem>Fail requests after a 15 second timeout</MyListItem></Appear>
              <Appear><MyListItem>failed requests are automatically retried twice</MyListItem></Appear>
            </List>
          </Slide>

          <Slide transition={["zoom"]} bgImage={images.bg2.replace("/", "")}>
            <Heading size={1} lineHeight={1.3} textColor="white">
              Works on React Native!
            </Heading>
            {/* rn image */}
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
              { loc: [2, 12], note: "Plain Tea React Component" },
              { loc: [12, 22], note: "Data requirement for Tea Component" },
              { loc: [23, 32], note: "Plain TeaStore React Component" },
              { loc: [32, 41], note: "Data requirement for TeaStore Component" },
              { loc: [42, 52], note: "Top Level Query Root" },
              { loc: [54, 60], note: "Render RootContainer" }
            ]}
          />

          <Slide transition={["zoom"]} bgImage={images.bg2.replace("/", "")}>
            <Heading size={6} lineHeight={1.3} textColor="white">
              <Link target="_blank" href="http://facebook.github.io/relay/prototyping/playground.html#/">Demo</Link>
            </Heading>
          </Slide>

          <Slide transition={["zoom"]} bgImage={images.bg2.replace("/", "")}>
            <Heading size={2} textSize="1.5em" lineHeight={1.3} textColor="white">
              Resources
            </Heading>
            <List>
              <MyListItem>
                <Link target="_blank" href="https://github.com/chentsulin/awesome-graphql">Awesome GraphQL</Link>
              </MyListItem>
              <MyListItem>
                <Link target="_blank" href="https://learngraphql.com/">Let's Learn GraphQL</Link>
              </MyListItem>
              <MyListItem>
                <Link target="_blank" href="https://raw.githubusercontent.com/sogko/graphql-shorthand-notation-cheat-sheet/master/graphql-shorthand-notation-cheat-sheet.png">GraphQL Cheat Sheet</Link>
              </MyListItem>
              <MyListItem>
                <Link target="_blank" href="https://github.com/chentsulin/graphql.github.io">GraphQL 繁中文件</Link>
              </MyListItem>
              <MyListItem>
                <Link target="_blank" href="https://github.com/chentsulin/relay">Relay 繁中文件</Link>
              </MyListItem>
            </List>
          </Slide>

          <Slide transition={["slide", "spin"]} bgImage={images.bg2.replace("/", "")}>
            <Heading caps size={1} textColor="tertiary">
              End
            </Heading>
            <Heading size={4} textColor="white">
              Thank you for listening!
            </Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
