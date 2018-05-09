
# ipm package: WiserIndoorGPS

## Overview

Library for interacting with Wiser Wireless Tracking

This is an ipm package, which contains one or more reusable assets within the ipm Community. The 'package.json' in this repo is a ipm spec's package.json, [here](https://docs.clearblade.com/v/3/6-ipm/spec), which is a superset of npm's package.json spec, [here](https://docs.npmjs.com/files/package.json).

[Browse ipm Packages](https://ipm.clearblade.com)

[![Live demonstration](https://img.youtube.com/vi/Q3kzf1_dGBY/0.jpg)](https://www.youtube.com/watch?v=Q3kzf1_dGBY)

## Setup

Follow Wiser Pilot Installation Kit from Wiser Representative

## Usage

### Code Services

`Example` - Fetch Passive Tag Positions

### Code Libraries

`Wiser` - Library for interacting with Wiser Wireless Tracking System


## Thank you

Powered by ClearBlade Enterprise IoT Platform: [https://platform.clearblade.com](https://platform.clearblade.com)
<a name="Wiser"></a>

## API

### Wiser(hostURI)
Wiser Library for interacting with Wiser Wireless Tracking server

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| hostURI | <code>string</code> | URI of server running Wiser software, ex "http://192.168.0.220:8080" |


* [Wiser(hostURI)](#Wiser)
    * [~fetchPassiveTags()](#Wiser..fetchPassiveTags) ⇒ <code>Array.&lt;Object&gt;</code>
    * [~queryPassiveTags(list, array)](#Wiser..queryPassiveTags)

<a name="Wiser..fetchPassiveTags"></a>

#### Wiser~fetchPassiveTags() ⇒ <code>Array.&lt;Object&gt;</code>
Fetch all passive tags

**Kind**: inner method of [<code>Wiser</code>](#Wiser)  
**Returns**: <code>Array.&lt;Object&gt;</code> - Array of Passive Tag Objects  
**Example**  
```js
[{
		"battery": 1,
		"id": 41021,
		"report": {
			"id": 214,
			"tag": 41021,
			"error": 0.69650248573048179,
			"location": {
				"x": 248.27271695939552,
				"y": 598.39472000389388,
				"z": 0
			},
			"numanchors": 4,
			"timestamp": 82349382
		}
	},
	{
		"battery": 0.5,
		"id": 41022,
		"report": {
			"id": 215,
			"tag": 41022,
			"error": 0.923847293848293432,
			"location": {
				"x": 235.12342342333839,
				"y": 859.29384762938483,
				"z": 0
			},
			"numanchors": 4,
			"timestamp": 823498392
		}
	}
]
```
<a name="Wiser..queryPassiveTags"></a>

#### Wiser~queryPassiveTags(list, array)
Perform a query of Wiser Passive Tags

**Kind**: inner method of [<code>Wiser</code>](#Wiser)  

| Param | Type | Description |
| --- | --- | --- |
| list | <code>Array.&lt;string&gt;</code> | of filters, ex ["battery", "report","id"] |
| array | <code>Array.&lt;Object&gt;</code> | of query objects, ex [{report:location:x_above:100},{report:location:x_below:400}] |

