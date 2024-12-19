"use client"; 
import { useUser } from "@clerk/nextjs";
import { useRouter } from 'next/router';

export default function CreatePostPage(){
    const {isSignedIn,user,isLoaded} = useUser();

    if(!isLoaded){
        return null;
    }
    if(!isSignedIn && user.publicMetadata.isAdmin){
        return <div>CreatePostPage</div>
    }else{
        return (
            <div className="flex flex-col items-center">
                <h1 className="text-center text-3xl my-7 font-semibold">
                    Create a New Post
                </h1>
                <form className="w-full max-w-lg" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                            Title
                        </label>
                        <input 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            id="title" 
                            type="text" 
                            placeholder="Post Title" 
                            required 
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
                            Select Category
                        </label>
                        <select 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            id="category" 
                            required
                        >
                            <option value="">Choose a category</option>
                            <option value="tech">Tech</option>
                            <option value="lifestyle">Lifestyle</option>
                            <option value="health">Health</option>
                            {/* Add more categories as needed */}
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="banner">
                            Choose Banner Image
                        </label>
                        <input 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            id="banner" 
                            type="file" 
                            accept="image/*" 
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="content">
                            Content
                        </label>
                        <textarea 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            id="content" 
                            placeholder="Write your post content here..." 
                            required 
                        />
                        {/* Add rich text editor functionality here */}
                    </div>
                    <div className="flex items-center justify-between">
                        <button 
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                            type="submit"
                        >
                            Publish
                        </button>
                    </div>
                </form>
                
            </div>
        )
    }
}

// Add the handleSubmit function to manage form submission
function handleSubmit(event) {
    event.preventDefault();
    const router = useRouter();
    // Logic to handle post submission goes here

    // After successful submission, navigate to the home page
    router.push('/');
} 