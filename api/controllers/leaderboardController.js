const User = require('../models/userModel')


exports.leaderboardDetail = async (req,res,next) => {
    var streakSort = {streak: -1}
    const leaderboardDetail = await User.find({}).sort(streakSort);
    res.status(200).send({ status: 200, leaderboardData:leaderboardDetail});
}