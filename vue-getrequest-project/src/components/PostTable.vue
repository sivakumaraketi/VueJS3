<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Body</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="post in state.posts.list" :key="post.id">
          <td>{{ post.id }}</td>
          <td>{{ post.title }}</td>
          <td>{{ post.body }}</td>
          <td>
            <button @click="editPost(post)">Edit</button>
            <button @click="deletePost(post.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue';
import axios from 'axios';

// Define a reactive state object
const state = reactive({
  posts: {
    list: [] // Initialize as an empty array
  }
});

// Fetch posts and update the state
const fetchPosts = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    state.posts.list = response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
  }
};

// Handle editing a post
const editPost = (post) => {
  alert(`Editing post with ID: ${post.id}`);
  // Implement the edit functionality here
};

// Handle deleting a post
const deletePost = async (id) => {
  if (confirm('Are you sure you want to delete this post?')) {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
      state.posts.list = state.posts.list.filter(post => post.id !== id);
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  }
};

// Fetch posts when the component is mounted
onMounted(fetchPosts);
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}
th, td {
  border: 1px solid #ddd;
  padding: 8px;
}
th {
  background-color: #f4f4f4;
}
button {
  margin-right: 5px;
}
</style>
