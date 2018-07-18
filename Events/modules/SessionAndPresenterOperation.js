//#ifdef desktopweb

//#else
/**
  *@function - groupRecord
  *this function will group the session and speaker data in one array
  */

function groupRecord(records) {
	try {
		var recordLength = records.length;
		var currentIndex = 0;
		var map = {};
		var sessionId;
		var currentElement;
		var itemIndex;
		var result = [];
		for (var i = 0; i < recordLength; i++) {
			sessionId = records[i].session_id;
			itemIndex = map[sessionId];
			if (itemIndex === null || itemIndex === undefined) {
				currentElement = [];
				currentElement.push(records[i]);
				result.push(currentElement);
				map[sessionId] = currentIndex;
				currentIndex++;
			} else {
				currentElement = result[itemIndex];
				currentElement.push(records[i]);
			}
		}
		return result;
	} catch (err) {
		kony.print("Session And Presenter Operation" + JSON.stringify(err));
	}
}
//#endif