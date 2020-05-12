import React, { setState } from "react";
import Webcam from "react-webcam";
import RecordRTC from 'recordrtc';

// const videoConstraints = {
// 	width: 1280,
// 	height: 720,
// 	facingMode: "user"
//   };

// const WebcamCapture = () => {
// 	const webcamRef = React.useRef(null);

// 	const capture = React.useCallback(
// 		() => {

// 			const imageSrc = webcamRef.current.getScreenshot();
// 			console.log(imageSrc);





// 		},
// 		[webcamRef]


// 	);

// 	return (
// 		<>
// 			<Webcam
// 				audio={false}
// 				height={720}
// 				ref={webcamRef}
// 				screenshotFormat="image/jpeg"
// 				width={1280}
// 				videoConstraints={videoConstraints}
// 			/>
// 			<button onClick={capture}>Capture photo</button>
// 		</>

// 	);
// };
// export default WebcamCapture;

export default class Record extends React.Component {
	// constructor(props) {
	// 	super(props);
	state = {
		stream: null,
		url: '',
		videoRecorder: '',
		isRecording: false,
		isUploading: false,
		isPreview: false,
		isDone: false,
		pausing: false,
		id: ''
	}
	// }

	hasGetUserMedia = () => {

		return !!(navigator.getUserMedia || navigator.webkitGetUserMedia ||
			navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia);
	}

	// setupVideo(callback) {

	setupVideo = (callback) => {
		
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
				const localstream=stream;
				console.log(localstream);
				const tracks= localstream.getTracks().forEach(track => {
					console.log(track, localstream);
				});
				console.log(tracks)

				let video = document.createElement('video')
				video.id = 'peerVideo'
				video.srcObject= localstream
				document.querySelector('#videodiv').appendChild(video)
				console.log(video.srcObject)

				const videoRecorder = RecordRTC(localstream, {
					type: 'video',
					video: {
						width: 640,
						height: 480
					},
					// canvas: {
					// 	width: 640,
					// 	height: 480
					// }
				})
				console.log('recording')
				console.log(videoRecorder)

				// this.setState({
				// 	stream: stream,
				// 	// url: window.URL.createObjectURL(stream)
				// }, callback);
			}, (err) => { console.log(err.name) })
	
	}

	pauseRecording = () => {
		this.state.videoRecorder.pauseRecording()
		this.setState({
			pausing: true,
		});
	}

	startRecording = () => {
		// if (this.state.pausing) {
		// 	this.state.videoRecorder.resumeRecording()
		// 	this.setState({
		// 		pausing: false,
		// 	});
		// 	return
		// }
		// this.setState({
		// 	videoRecorder: '',
		// 	isUploading: false,
		// 	pausing: false,
		// 	isPreview: false,
		// 	hasRecording: false,
		// }, 
		this.setupVideo(this, () => {
			console.log('recording')
			const videoRecorder = RecordRTC(this.state.stream, {
				type: 'video',
				video: {
					width: 640,
					height: 480
				},
				canvas: {
					width: 640,
					height: 480
				}
			})
			console.log(videoRecorder)
			videoRecorder.startRecording()
			this.setState({
				videoRecorder: videoRecorder,
				isRecording: true,
			});
		})
		// )
	}

	stopRecording = () => {
		window.dispatchEvent(new CustomEvent('stopRecording'));
		this.state.videoRecorder.stopRecording((url) => {
			this.setState({
				isRecording: false,
				pausing: false,
				hasRecording: true,
			});
		})
	}

	startPreview = () => {
		this.state.videoRecorder.getDataURL((url) => {
			this.setState({
				url: url,
				isPreview: true
			});
		})
	}
	// uploadFile = () => {
	// 	this.setState({
	// 		pausing: false,
	// 		isRecording: false,
	// 		isUploading: 1,
	// 		isPreview: false,
	// 	});
	
	// 	this.state.videoRecorder.getDataURL((data) => {

	// 		var uploadData = {
	// 			fileName: id,
	//   			file: data,
	// 			isBase64: true,
	// 			streams: 'dynamic',
	// 			chunkSize: 'dynamic',
	// 		}

	// 		var uploadInstance = Videos.insert(uploadData, false);

	// 		uploadInstance.on('progress', (progress, file) => {
	// 			this.setState({
	// 				isUploading: progress,
	// 			});
	// 		});

	// 		uploadInstance.on('end', (error, fileObj) => {
	// 			if (error) {
	// 				console.log('Error during upload: ' + error.reason);
	// 			} else {
	// 				console.log(fileObj.meta._id, fileObj.meta.try)
	// 				this.setState({
	// 					id: fileObj._id,
	// 					isDone: true
	// 				});
	// 			}
	// 		});
	// 		uploadInstance.start()
	// 	})

	// }

	render() {
		return (
			<>
				<Webcam
					ref='video'
					isPreview={this.state.isPreview}
					url={this.state.url} />


				<button onClick={this.setupVideo}>Capture photo</button>
				<button onClick={this.startRecording}>Record</button>

				<div id='videodiv' autoplay playsinline controls="false"></div>
			</>
		)
	}

}	