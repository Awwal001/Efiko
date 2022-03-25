import React, { useEffect, useState } from 'react';
import Posts from '../StorePosts/Posts';
import PostLoadingComponent from '../StorePosts/PostLoading';
import axios from 'axios';
import "./Store.module.css";




function Store() {
	const PostLoading = PostLoadingComponent(Posts);
	const [appState, setAppState] = useState({
		loading: true,
		posts: null,
	});
	

	useEffect(() => {
		axios.get("http://127.0.0.1:8000/store/api/").then((res) => {
			const allPosts = res.data;
			console.log(res.data);
			setAppState({ loading: false, posts: allPosts });
			console.log(res.data);
		});
	}, [setAppState]);
	

	return (
		<div >
			<PostLoading isLoading={appState.loading} posts={appState.posts} />
		</div>
	);
}
export default Store;
