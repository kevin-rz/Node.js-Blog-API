  
import mongoose from 'mongoose'

const postSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    tittle: String,
    date: Date,
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    totalComments: Number,
    content: String,
    comments: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'Comment'
    }]
})

export interface IPost extends mongoose.Document {
    tittle: string
    date: String,
    author: any,
    comments: [any],
    totalComments: number,
    content: String
}

export const Post = mongoose.model('Post', postSchema)
