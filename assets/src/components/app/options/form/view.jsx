import React from 'react';
import sjcl from 'sjcl';

export default ({ cityId, podId, setPodId, desk, pods }) => (
	<form action="#">

		<h1>Options</h1>

		<div className="input">
			<div className="label">Location</div>
			<div id="input-location">
				<label>
					<input
						type="radio"
						htmlName="location"
						value="1"
						checked={ cityId == 1 } /> NYC
				</label>
				<label>
					<input
						type="radio"
						htmlName="location"
						value="2"
						checked={ cityId == 2 } /> SF
				</label>
			</div>
		</div>

		<div className="input">
			<label htmlFor="select-pod">Pod</label>
			<select id="select-pod" 
				value={ podId }
				onChange={ dispatchChange(setPodId) }>
				{ podOptions(pods) }
			</select>
		</div>

		<div className="input">
			<label htmlFor="input-desk">Desk</label>
			<select id="select-pod" value={ desk }>
				{ deskOptions(pods[podId].pairs) }
			</select>
		</div>

		<div className="input">
			<label htmlFor="input-password">Password</label>
			<input
				type="password"
				id="input-password" />
		</div>

	</form>
)

const setDeskHash = () => {
	const deskRecipe = ["cityId", "desk", "password"]
		.map(key => localStorage[key])
		.reduce((a, b) => a + b);

	const deskHash = sjcl.codec.hex.fromBits(sjcl.hash.sha256.hash(deskRecipe));
	chrome.storage.local.set({ deskHash });
}

const dispatchChange = dispatch => e => {
	dispatch(e.target.value);
}

const podOptions = pods => Object.keys(pods).map(podId => (
	<option value={ podId } key={ podId }>{ pods[podId].name }</option>
))

const deskOptions = desks => Object.keys(desks).map(deskNum => (
	<option value={ deskNum } key={ deskNum }>{ deskNum }</option>
))

// import React from 'react';
// import $ from 'jquery';
// import sjcl from 'sjcl';

// export default class extends React.Component {
// 	constructor(props) {
// 		super(props);

// 		this.state = {
// 			cityId: localStorage["cityId"],
// 			podId: localStorage["podId"],
// 			desk: localStorage["desk"],
// 			password: localStorage["password"],
// 			saved: false,
// 			pods: {}
// 		};

// 		this.handleDeskChange = this.handleDeskChange.bind(this);
// 		this.handlePasswordChange = this.handlePasswordChange.bind(this);
// 		this.handleLocationChange = this.handleLocationChange.bind(this);
// 		this.handlePodChange = this.handlePodChange.bind(this);
// 	}

// 	getCityId() {
// 		return ((this.state && this.state.cityId) || localStorage["cityId"] || 1);
// 	}

// 	getCityByIP(callback) {
// 		if((this.state && this.state.cityId) || localStorage["cityId"]){
// 			callback && callback.apply(this);
// 			return;
// 		};

// 		let sfLong = -122;
// 		let nycLong = -74;
// 		let midLong = parseInt((sfLong + nycLong) / 2);

// 		$.getJSON("http://ipinfo.io/json", (data) => {
// 				let long = parseInt(data.loc.split(",")[1]);
// 				this.setCityId((long > midLong) ? 1 : 2, callback);
// 		});
// 	}

// 	setCityId(cityId, callback) {
// 		localStorage["cityId"] = cityId;
// 		localStorage.removeItem("podId");

// 		this.setState({
// 			cityId: cityId,
// 			podId: null
// 		},
// 		callback);
// 	}

// 	componentDidMount() {
// 		localStorage.removeItem("day");
// 		localStorage.removeItem("weather");

// 		this.getCityByIP(function(){
// 			this.loadRemotePods();
// 		});
// 	}

// 	getPods(data) {
// 		var pods = {};

// 		if(data && data.pods){
// 			for(var podId in data.pods){
// 				pods[podId] = data.pods[podId].name;
// 			}
// 		}

// 		return pods;
// 	}

// 	loadRemotePods() {
// 		var url = "http://progress.appacademy.io/api/pairs.json?city_id=" + this.state.cityId;

// 		$.getJSON(url, function(data){
// 			this.setState({"pods": this.getPods(data)});
// 		}.bind(this));
// 	}

// 	flashInfo() {
// 		this.setState({saved: true});

// 		if(this.flashTimeout){
// 			clearTimeout(this.flashTimeout);
// 		}

// 		this.flashTimeout = setTimeout(function(){
// 			this.setState({saved: false});
// 		}.bind(this), 2000);
// 	}

// 	handleDeskChange(event) {
// 		var desk = event.target.value;
// 		localStorage["desk"] = desk;
// 		this.setState({desk: desk});
// 		this.flashInfo();
// 		this.setDeskHash();

// 		this.props.changed({ desk });
// 	}

// 	handlePasswordChange(event) {
// 		var password = event.target.value;
// 		localStorage["password"] = password;
// 		this.setState({password: password});
// 		this.flashInfo();
// 		this.setDeskHash();
// 	}

// 	handleLocationChange(event) {
// 		this.setCityId(event.target.value, function(){
// 			this.loadRemotePods();
// 			this.flashInfo();
// 			this.setDeskHash();
// 		});
// 	}

// 	handlePodChange(event) {
// 		var podId = event.target.value;
// 		localStorage["podId"] = podId;
// 		this.setState({podId: podId});
// 		this.flashInfo();

// 		this.props.changed({ podId });
// 	}

// 	setDeskHash() {
// 		var deskRecipe = "";

// 		["cityId", "desk", "password"].forEach(function(key){
// 			deskRecipe += localStorage[key];
// 		});

// 		var deskHash = sjcl.codec.hex.fromBits(sjcl.hash.sha256.hash(deskRecipe));
// 		chrome.storage.local.set({deskHash: deskHash});
// 	}

// 	render() {
// 		var info = this.state.saved && (<p>Settings saved!</p>);
// 		var podOptions = [];

// 		if(this.state.cityId && this.state.pods){
// 			for(var podId in this.state.pods){
// 				podOptions.push(
// 					<option value={podId} key={podId}>{this.state.pods[podId]}</option>
// 				);
// 			}
// 		}

// 		return (
// 			<form action="#">

// 				<h1>Options</h1>

// 				<div id="info">{info}</div>

// 				<div className="input">
// 					<div className="label">Location</div>
// 					<div id="input-location">
// 						<label>
// 							<input
// 								type="radio"
// 								htmlName="location"
// 								value="1"
// 								checked={this.state.cityId == 1}
// 								onChange={this.handleLocationChange} /> NYC
// 						</label>
// 						<label>
// 							<input
// 								type="radio"
// 								htmlName="location"
// 								value="2"
// 								checked={this.state.cityId == 2}
// 								onChange={this.handleLocationChange} /> SF
// 						</label>
// 					</div>
// 				</div>

// 				<div className="input">
// 					<label htmlFor="select-pod">Pod</label>
// 					<select id="select-pod" value={this.state.podId} onChange={this.handlePodChange}>
// 						{podOptions}
// 					</select>
// 				</div>

// 				<div className="input">
// 					<label htmlFor="input-desk">Desk</label>
// 					<input
// 						type="number"
// 						value={this.state.desk}
// 						id="input-desk"
// 						onChange={this.handleDeskChange} />
// 				</div>

// 				<div className="input">
// 					<label htmlFor="input-password">Password</label>
// 					<input
// 						type="password"
// 						value={this.state.password}
// 						id="input-password"
// 						onChange={this.handlePasswordChange} />
// 				</div>

// 			</form>
// 		);
// 	}
// }