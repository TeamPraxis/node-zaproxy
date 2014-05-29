/* Zed Attack Proxy (ZAP) and its related class files.
 *
 * ZAP is an HTTP/HTTPS proxy for assessing web application security.
 *
 * Copyright the ZAP development team
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


'use strict';

/**
 * This file was automatically generated.
 */
function Spider(clientApi) {
  this.api = clientApi;
}

Spider.prototype.status = function (callback) {
  this.api.request('/spider/view/status/', callback);
};

Spider.prototype.results = function (callback) {
  this.api.request('/spider/view/results/', callback);
};

Spider.prototype.excludedFromScan = function (callback) {
  this.api.request('/spider/view/excludedFromScan/', callback);
};

Spider.prototype.optionMaxDepth = function (callback) {
  this.api.request('/spider/view/optionMaxDepth/', callback);
};

Spider.prototype.optionScopeText = function (callback) {
  this.api.request('/spider/view/optionScopeText/', callback);
};

Spider.prototype.optionScope = function (callback) {
  this.api.request('/spider/view/optionScope/', callback);
};

Spider.prototype.optionThreadCount = function (callback) {
  this.api.request('/spider/view/optionThreadCount/', callback);
};

Spider.prototype.optionPostForm = function (callback) {
  this.api.request('/spider/view/optionPostForm/', callback);
};

Spider.prototype.optionProcessForm = function (callback) {
  this.api.request('/spider/view/optionProcessForm/', callback);
};

Spider.prototype.optionSkipURLString = function (callback) {
  this.api.request('/spider/view/optionSkipURLString/', callback);
};

Spider.prototype.optionRequestWaitTime = function (callback) {
  this.api.request('/spider/view/optionRequestWaitTime/', callback);
};

Spider.prototype.optionUserAgent = function (callback) {
  this.api.request('/spider/view/optionUserAgent/', callback);
};

Spider.prototype.optionParseComments = function (callback) {
  this.api.request('/spider/view/optionParseComments/', callback);
};

Spider.prototype.optionParseRobotsTxt = function (callback) {
  this.api.request('/spider/view/optionParseRobotsTxt/', callback);
};

Spider.prototype.optionParseSVNEntries = function (callback) {
  this.api.request('/spider/view/optionParseSVNEntries/', callback);
};

Spider.prototype.optionParseGit = function (callback) {
  this.api.request('/spider/view/optionParseGit/', callback);
};

Spider.prototype.optionHandleParameters = function (callback) {
  this.api.request('/spider/view/optionHandleParameters/', callback);
};

Spider.prototype.optionHandleODataParametersVisited = function (callback) {
  this.api.request('/spider/view/optionHandleODataParametersVisited/', callback);
};

Spider.prototype.optionDomainsAlwaysInScope = function (callback) {
  this.api.request('/spider/view/optionDomainsAlwaysInScope/', callback);
};

Spider.prototype.optionDomainsAlwaysInScopeEnabled = function (callback) {
  this.api.request('/spider/view/optionDomainsAlwaysInScopeEnabled/', callback);
};

Spider.prototype.scan = function (url, apikey, callback) {
  if (!callback && typeof(apikey) === 'function') {
    callback = apikey;
    apikey = null;
  }
  this.api.request('/spider/action/scan/', {'url' : url}, callback);
};

Spider.prototype.scanAsUser = function (url, contextid, userid, apikey, callback) {
  if (!callback && typeof(apikey) === 'function') {
    callback = apikey;
    apikey = null;
  }
  this.api.request('/spider/action/scanAsUser/', {'url' : url, 'contextId' : contextid, 'userId' : userid}, callback);
};

Spider.prototype.stop = function (apikey, callback) {
  if (!callback && typeof(apikey) === 'function') {
    callback = apikey;
    apikey = null;
  }
  this.api.request('/spider/action/stop/', {}, callback);
};

Spider.prototype.clearExcludedFromScan = function (apikey, callback) {
  if (!callback && typeof(apikey) === 'function') {
    callback = apikey;
    apikey = null;
  }
  this.api.request('/spider/action/clearExcludedFromScan/', {}, callback);
};

Spider.prototype.excludeFromScan = function (regex, apikey, callback) {
  if (!callback && typeof(apikey) === 'function') {
    callback = apikey;
    apikey = null;
  }
  this.api.request('/spider/action/excludeFromScan/', {'regex' : regex}, callback);
};

Spider.prototype.setOptionScopeString = function (string, apikey, callback) {
  if (!callback && typeof(apikey) === 'function') {
    callback = apikey;
    apikey = null;
  }
  this.api.request('/spider/action/setOptionScopeString/', {'String' : string}, callback);
};

Spider.prototype.setOptionSkipURLString = function (string, apikey, callback) {
  if (!callback && typeof(apikey) === 'function') {
    callback = apikey;
    apikey = null;
  }
  this.api.request('/spider/action/setOptionSkipURLString/', {'String' : string}, callback);
};

Spider.prototype.setOptionUserAgent = function (string, apikey, callback) {
  if (!callback && typeof(apikey) === 'function') {
    callback = apikey;
    apikey = null;
  }
  this.api.request('/spider/action/setOptionUserAgent/', {'String' : string}, callback);
};

Spider.prototype.setOptionHandleParameters = function (string, apikey, callback) {
  if (!callback && typeof(apikey) === 'function') {
    callback = apikey;
    apikey = null;
  }
  this.api.request('/spider/action/setOptionHandleParameters/', {'String' : string}, callback);
};

Spider.prototype.setOptionMaxDepth = function (integer, apikey, callback) {
  if (!callback && typeof(apikey) === 'function') {
    callback = apikey;
    apikey = null;
  }
  this.api.request('/spider/action/setOptionMaxDepth/', {'Integer' : integer}, callback);
};

Spider.prototype.setOptionThreadCount = function (integer, apikey, callback) {
  if (!callback && typeof(apikey) === 'function') {
    callback = apikey;
    apikey = null;
  }
  this.api.request('/spider/action/setOptionThreadCount/', {'Integer' : integer}, callback);
};

Spider.prototype.setOptionPostForm = function (bool, apikey, callback) {
  if (!callback && typeof(apikey) === 'function') {
    callback = apikey;
    apikey = null;
  }
  this.api.request('/spider/action/setOptionPostForm/', {'Boolean' : bool}, callback);
};

Spider.prototype.setOptionProcessForm = function (bool, apikey, callback) {
  if (!callback && typeof(apikey) === 'function') {
    callback = apikey;
    apikey = null;
  }
  this.api.request('/spider/action/setOptionProcessForm/', {'Boolean' : bool}, callback);
};

Spider.prototype.setOptionRequestWaitTime = function (integer, apikey, callback) {
  if (!callback && typeof(apikey) === 'function') {
    callback = apikey;
    apikey = null;
  }
  this.api.request('/spider/action/setOptionRequestWaitTime/', {'Integer' : integer}, callback);
};

Spider.prototype.setOptionParseComments = function (bool, apikey, callback) {
  if (!callback && typeof(apikey) === 'function') {
    callback = apikey;
    apikey = null;
  }
  this.api.request('/spider/action/setOptionParseComments/', {'Boolean' : bool}, callback);
};

Spider.prototype.setOptionParseRobotsTxt = function (bool, apikey, callback) {
  if (!callback && typeof(apikey) === 'function') {
    callback = apikey;
    apikey = null;
  }
  this.api.request('/spider/action/setOptionParseRobotsTxt/', {'Boolean' : bool}, callback);
};

Spider.prototype.setOptionParseSVNEntries = function (bool, apikey, callback) {
  if (!callback && typeof(apikey) === 'function') {
    callback = apikey;
    apikey = null;
  }
  this.api.request('/spider/action/setOptionParseSVNEntries/', {'Boolean' : bool}, callback);
};

Spider.prototype.setOptionParseGit = function (bool, apikey, callback) {
  if (!callback && typeof(apikey) === 'function') {
    callback = apikey;
    apikey = null;
  }
  this.api.request('/spider/action/setOptionParseGit/', {'Boolean' : bool}, callback);
};

Spider.prototype.setOptionHandleODataParametersVisited = function (bool, apikey, callback) {
  if (!callback && typeof(apikey) === 'function') {
    callback = apikey;
    apikey = null;
  }
  this.api.request('/spider/action/setOptionHandleODataParametersVisited/', {'Boolean' : bool}, callback);
};

module.exports = Spider;
