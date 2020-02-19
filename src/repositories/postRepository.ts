import {Post, IPost} from '../models/post'
import mongoose from 'mongoose'
import { Comment } from '../models/comment'

const findPostById = async (id) => {
    return await Post.findById(id).populate('author comments')
}

const savePost = async (post) => {
    const newUser = new Post({
        _id: new mongoose.Types.ObjectId(),
        tittle: post.tittle,
        date: post.date,
        author: post.author,
        totalComments: 0,
        content: post.content,
        comments: []
    })
    return await newUser.save()
}

const deletePostById = async (id) => {
    return await Post.findByIdAndRemove(id)
}
const updatePost = async (id, post) => {
    const updateOps = {}
    for (const ops of post){
        updateOps[ops.propName] = ops.value
    }
    return await Post.update({_id: id}, {$set: updateOps})
}

const commentPost = async (post) => {
    const newComment = new Comment({
        _id: new mongoose.Types.ObjectId(),
        comment: post.comment,
        date: post.date,
        author: post.author
    })
    return await newComment.save()
}

export default {
    findPostById,
    savePost,
    deletePostById,
    updatePost,
    commentPost
}