const followModel = require("../models/follow.model");
const userModel = require("../models/user.model");

async function followUserController(req,res) {

  const followerUsername = req.user.username
  const followeeUsername = req.params.username

  const isFolloweeExists = await userModel.findOne({username:followeeUsername})

  if(!isFolloweeExists){
    return res.status(404).json({
      message:`${followeeUsername} user not exists`
    })
  }

  if(followerUsername == followeeUsername){
    return res.status(400).json({
      message: 'You cannot follow yourself'
    })
  }

  const isAlreadyFollowing = await followModel.findOne({
    follower:followerUsername,
    followee:followeeUsername
  })

  if(isAlreadyFollowing){
    return res.status(200).json({
      message:`You are already following ${followeeUsername}`,
      follow:isAlreadyFollowing
    })
  }

  const follow = await followModel.create({
    follower:followerUsername,
    followee:followeeUsername
  })

  res.status(200).json({
    message: `You are now following ${followeeUsername}`,
    follow
  })
}

async function unfollowUserController(req,res) {

  const followerUsername = req.user.username
  const followeeUsername = req.params.username

  const isFollowing = await followModel.findOne({
    follower:followerUsername,
    followee:followeeUsername
  })

  if(!isFollowing){
    return res.status(200).json({
      message:`You already not following ${followeeUsername}`
    })
  }

  await followModel.findByIdAndDelete(isFollowing._id)
  
  res.status(200).json({
    message: `You unfollowed ${followeeUsername}`
  })

}

module.exports = {
  followUserController,
  unfollowUserController
}