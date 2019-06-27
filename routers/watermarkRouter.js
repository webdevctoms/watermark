const express = require("express");
const router = express.Router();
const Jimp = require("jimp");

router.get("/",(req,res) => {
	let srcImg;
	let compositeImg;
	return Jimp.read("./data/size-chart-clip.png")

	.then(image => {
		srcImg = image;
		return Jimp.read("./data/test.png")
		
	})

	.then(image => {
		compositeImg = image;
		console.log(compositeImg.bitmap.width,compositeImg.bitmap.height);
		return srcImg.composite(compositeImg,0,0).writeAsync("./data/testimage.png")
	})

	.then(data => {
		res.json({
			res:200,
			message:"All done"
		})
	})

	.catch(err => {
		console.log("Error in router: ",err);
	})
});

module.exports = {router};