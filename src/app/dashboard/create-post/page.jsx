"use client"; 
import { useUser } from "@clerk/nextjs";

export default function CreatePostPage(){
    const {isSignedIn,user,isLoaded} = useUser();
    return (
        <div>CreatePostPage</div>
    )
} 