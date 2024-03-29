import { Profile } from '../models/profile.js'
import { Post } from '../models/post.js'

const create = async (req, res) => {
  try {
    req.body.added_by = req.user.profile
    const post = await new Post(req.body)
    await post.save()
    await Profile.updateOne(
      { _id: req.user.profile },
      { $push: { posts: post } }
    )
    return res.status(201).json(post)
  } catch (err) {
    return res.status(500).json(err)
  }
}

const index = async (req, res) => {
  try {
    const posts = await Post.find({})
      .populate('added_by')
      .sort({ createdAt: 'desc' })
    return res.status(200).json(posts)
  } catch (err) {
    return res.status(500).json(err)
  }
}

const show = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
      .populate('added_by')
      .populate('comments.commenter')
    return res.status(200).json(post)
  } catch (err) {
    return res.status(500).json(err)
  }
} 

const update = async (req, res) =>{
  try {
    const updateData = { is_resolved: true }
    const updatedPost = await Post.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    ).populate('added_by')
    return res.status(200).json(updatedPost)
  } catch (err) {
    return res.status(500).json(err)
  }
} 

const deletePost = async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id)
    const profile = await Profile.findById(req.user.profile)
    profile.posts.remove({ _id: req.params.id })
    await profile.save()
    return res.status(204).end()
  } catch (err) {
    return res.status(500).json(err)
  }
}

const createComment = async (req, res) => {
  try {
    req.body.commenter = req.user.profile
    const post = await Post.findById(req.params.id)
    post.comments.push(req.body)
    await post.save()
    const newComment = post.comments[post.comments.length - 1]
    
    const profile = await Profile.findById(req.user.profile)
    newComment.commeter = profile
    return res.status(201).json(newComment)
  } catch (err) {
    res.status(500).json(err)
  }
}

const markCommentAsSolution = async (req, res) => {
  try {
    const updatedPost = await Post.findById(req.params.postId)
      .populate('added_by')
      .populate('comments.commeter')

    const idx = updatedPost.comments.findIndex(
      (comment) => comment._id.equals(req.params.commentId)
    )

    updatedPost.is_resolved = true
    updatedPost.comments[idx].is_solution = true

    await updatedPost.save()
    return res.status(200).json(updatedPost)

  } catch (err) {
    res.status(500).json(err)
  }
}

const deleteComment = async(req, res)=> {
  try {
    const post = await Post.findById(req.params.postId)
    post.comments.remove({_id: req.params.commentId})

    await post.save()
    return res.status(204).end()
  }catch(err){
    res.status(500).json(err)
  }
}

export {
  create,
  index,
  show,
  update,
  deletePost as delete,
  createComment,
  markCommentAsSolution,
  deleteComment,
}
