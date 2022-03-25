import React, { useEffect, useState } from 'react';
import './App.css';
import Posts from './components/Posts/Posts';
import MainFeaturedPost from './hoc/Layout/MainFeaturedPost';
import PostLoadingComponent from './components/Posts/PostLoading';
import axiosInstance from './axios';
import CategoryNav from './categoryNav';



function App() {
	const PostLoading = PostLoadingComponent(Posts);
	const [appState, setAppState] = useState({
		loading: true,
		posts: null,
	});
	
	const mainFeaturedPost = {
	  title: 'Efiko',
	  description:
		"Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
	  image: 'https://source.unsplash.com/random',
	  imgText: 'main image description',
	  linkText: 'Filter ads',
	};
	

	useEffect(() => {
		axiosInstance.get().then((res) => {
			const allPosts = res.data;
			console.log(res.data);
			setAppState({ loading: false, posts: allPosts });
			console.log(res.data);
		});
	}, [setAppState]);
	

	return (
		<div className="App">
			<h1>Efiko.ng</h1>
			<CategoryNav/>
			<MainFeaturedPost post={mainFeaturedPost} />
			<h1>Latest Posts</h1>
			<PostLoading isLoading={appState.loading} posts={appState.posts} />
		</div>
	);
}
export default App;



