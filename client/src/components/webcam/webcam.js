import React from "react";
import Webcam from "react-webcam";
import Button from '@material-ui/core/Button';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera'
import { makeStyles } from '@material-ui/core/styles';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
import ScreenShareIcon from '@material-ui/icons/ScreenShare';
const useStyles = makeStyles((theme) => ({
	button: {
		margin: theme.spacing(1),
	},
}));




const WebcamCapture = () => {
	const webcamRef = React.useRef(null);



	const capture = React.useCallback(
		() => {

			const imageSrc = webcamRef.current.getScreenshot();
			console.log("Image Data: ", imageSrc);

		},
		[webcamRef]
	);

	function startCapture(displayMediaOptions) {
		let captureStream = null;

		return navigator.mediaDevices.getDisplayMedia(displayMediaOptions)
	
		.catch(err => { console.error("Error:" + err); return null; });
		
	
	}

	const setupVideo = (callback) => {

		navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
		// localstream.getTracks()
		// console.log(localstream)

		// check if stream has already been captured
		// if (this.state.stream) {
		// 	console.log(this.state.stream);
		// 	this.setState({
		// 		url: window.URL.createObjectURL(this.state.stream)
		// 	}, callback);
		// } else {

		navigator.getUserMedia({
			audio: true,
			video: {
				frameRate: { ideal: 20, max: 30 },

			},
			height: '480px', width: '640px'


		}, (stream) => {
			const localstream = stream;
			console.log(localstream);
			const tracks = localstream.getTracks().forEach(track => {
				console.log(track, localstream);
			});
			console.log(tracks)

			// let video = document.createElement('video')
			// video.id = 'peerVideo'
			// video.srcObject= localstream
			// document.querySelector('#videodiv').appendChild(video)
			// console.log(video.srcObject)

			// const videoRecorder = RecordRTC(localstream, {
			// 	type: 'video',
			// 	video: {
			// 		width: 640,
			// 		height: 480
			// 	},
			// 	// canvas: {
			// 	// 	width: 640,
			// 	// 	height: 480
			// 	// }
			// })
			// console.log('recording')
			// console.log(videoRecorder)

			// this.setState({
			// 	stream: stream,
			// 	// url: window.URL.createObjectURL(stream)
			// }, callback);
		}, (err) => { console.log(err.name) })

	}

	const classes = useStyles();

	return (
		<>
			<Webcam
				audio={false}
				height={720}
				ref={webcamRef}
				screenshotFormat="image/jpeg"
				width={1280}
			//   videoConstraints={videoConstraints}
			/>
			<div>
				<Button
					onClick={setupVideo}
					variant="contained"
					color="secondary"
					className={classes.button}
					startIcon={<RecordVoiceOverIcon />}
				>
					Start Live
			</Button>
				<Button
					onClick={capture}
					variant="contained"
					color="secondary"
					className={classes.button}
					startIcon={<PhotoCameraIcon />}
				>
					Capture photo
			</Button>
				<Button
					onClick={startCapture}
					variant="contained"
					color="secondary"
					className={classes.button}
					startIcon={<ScreenShareIcon />}
				>
					Screen Share
			</Button>
			</div>
		</>

	);
};
export default WebcamCapture;