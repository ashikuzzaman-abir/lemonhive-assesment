import "../styles/globals.css";
import config from "../configs/main.config";
import PageLayout from "../components/PageLayout";
import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	HttpLink,
	from,
} from "@apollo/client";

// import {onError} from "@apollo/client/link/error";

// const errorLink = onError(({graphqlErrors, networkErrors}) => {
//   if( graphqlErrors) {

//   }
// })
// const httpLink= new HttpLink({ uri: config.graphQLAPI})
// const link = from({
//   errorLink,
//   httpLink,
// })

const client = new ApolloClient({
	cache: new InMemoryCache(),
	uri: "https://api.react-finland.fi/graphql",
  // link,
});

function MyApp({ Component, pageProps }) {
	return (
		<>
			<ApolloProvider client={client}>
				<PageLayout Component={Component} pageProps={pageProps} />
			</ApolloProvider>
		</>
	);
}

export default MyApp;
