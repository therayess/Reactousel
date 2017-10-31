var request = require('request');
var data = {};

// controller that handles data GET request.
data.get = function (req, res) {
	var body = [
		{
			title: "First Block",
			images: ['http://vastudubai.com/images/flight.jpg', 'http://www.xsjjys.com/data/out/60/WHDQ-512051209.jpg', 'http://www.sealife-cameras.com/sites/sealife/files/gallery/sealife-dc1400-underwater-camera-nudibranch-ARadwan-medium.jpg', 'https://www.nasa.gov/images/content/384568main_ero_ngc6302_4x3_800-600.jpg', 'http://www.naba.org/chapters/nabanj/images/final/1004_Eastern_Tiger_Swallowtail_WW.jpg', 'https://www.realestate.com.au/blog/wp-content/uploads/2017/07/06162905/images-of-gardens-outdoor-chair-800x600.jpg']
		},
		{
			title: "Second Block",
			images: ['http://173.212.215.145/~doehetzelf/images/henderix/orccin01.jpg', 'https://nssdc.gsfc.nasa.gov/image/planetary/earth/gal_indian.jpg', 'http://www.prelovac.com/products/wp-content/uploads/2012/04/New_York_City_New_York_08.jpg', 'http://www.cosmotography.com/images/black_hole/images/bllac2.big.jpg', 'https://pi.tedcdn.com/r/pe.tedcdn.com/images/ted/afcb1a554cee6dc16a56ace473c23a7afa8b02c5_800x600.jpg?w=1200', 'https://thumbs.dreamstime.com/b/staff-meeting-99629.jpg']
		},
		{
			title: "Third Block",
			images: ['https://corporate.aucklandairport.co.nz/~/media/Images/Corporate/Filming-and-Photography.ashx?h=600&w=800&la=en&hash=B3C2FFADCD3D8185C932C88025C7A986FEA2B816', 'http://greeklandscapes.com/images/wallpapers/itanos800-600.jpg', 'http://graphics.cs.cmu.edu/projects/photoclipart/images/abbeyBackground.jpg', 'https://i.stack.imgur.com/oc1L8.jpg', 'https://upload.wikimedia.org/wikipedia/commons/1/1d/Curzon_Gate.jpg', 'http://www.halliburton.com/public/pubsdata/customer-resources/gallery/images/halliburton_q10_pump.jpg']
		},
		{
			title: "Fourth Block",
			images: ['https://www.artetics.com/demo/images/sampledata/animals/animals5.jpg', 'https://www.nasa.gov/images/content/524722main_pia13892-43_800-600.jpg', 'https://cdn20.patch.com/getty/790386/20171023/011117/styles/T800x600/public/processed_images/gettyimages_daylight_saving_time_ends_joe_raedlegetty_images_news-1508778202-7355.jpg', 'https://www.colourbox.com/preview/3523735-cat-animal.jpg', 'https://www.avo.alaska.edu/images/dbimages/display/1459225744.JPG', 'http://i.stack.imgur.com/FaE06.jpg']
		}
	];

	res.send(body);
};

module.exports = data;