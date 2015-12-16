(function(){var __amdDefs__={},ASTWalker_prototype=function(){!function(t){t.on=function(t,e){return this._ev||(this._ev={}),this._ev[t]||(this._ev[t]=[]),this._ev[t].push(e),this},t.removeListener=function(t,e){if(this._ev&&this._ev[t])for(var i=this._ev[t],n=0;n<i.length;n++)if(i[n]==e)return void i.splice(n,1)},t.trigger=function(t,e,i){if(this._ev&&this._ev[t]){return this._ev[t].forEach(function(t){t(e,i)}),this}}}(this),function(t){t.ArrayExpression=function(t,e){var i=this;if(t.elements&&t.elements.length>=0){this.out("[");var n=0;t.elements.forEach(function(t){n++>0&&i.out(","),i.trigger("ArrayElement",t),i.walk(t,e)}),this.out("]")}},t.ArrayPattern=function(t,e){var i=this;if(t.elements&&t.elements.length>0){this.out("[");var n=0;t.elements.forEach(function(t){n++>0&&i.out(","),i.trigger("ArrayElement",t),i.walk(t,e)}),this.out("]")}},t.ArrowExpression=function(){},t.ArrowFunctionExpression=function(t,e){this.out("function"),t.generator&&(this.trigger("FunctionGenerator",t),this.out("* ")),t.id&&t.id.name?(console.log("ERROR: ArrowFunctionExpression should not have name"),this.trigger("FunctionName",t),this.out(" "+t.id.name+" ")):this.trigger("FunctionAnonymous",t);var i=this;this.out("(");var n=0;t.params.forEach(function(s){if(n++>0&&i.out(","),i.trigger("FunctionParam",s),i.walk(s,e),t.defaults&&t.defaults[n-1]){var o=t.defaults[n-1];i.out("="),i.trigger("FunctionDefaultParam",o),i.walk(o,e)}}),this.out(")"),i.trigger("FunctionBody",t.body),this.walk(t.body,e)},t.AssignmentExpression=function(t,e){this.trigger("AssigmentLeft",t.left),this.walk(t.left,e),this.out(" "+t.operator+" "),this.trigger("AssigmentRight",t.right),this.walk(t.right,e)},t.BinaryExpression=function(t,e){var i=!0,n=!0;("Identifier"==t.left.type||"Literal"==t.left.type)&&(i=!1),("Identifier"==t.right.type||"Literal"==t.right.type)&&(n=!1),i&&this.out("("),this.walk(t.left,e),i&&this.out(")"),this.out(" "+t.operator+" "),n&&this.out("("),this.walk(t.right,e),n&&this.out(")")},t.BlockStatement=function(t,e){this.out(" {",!0),this.indent(1),this.walk(t.body,e,!0),this.indent(-1),this.out("}")},t.BreakStatement=function(t,e){this.nlIfNot(),this.out("break "),t.label&&this.walk(t.label,e),this.out("",!0)},t.breakWalk=function(){this._breakWalk=!0},t.CallExpression=function(t,e){if(t.callee){if("FunctionExpression"==t.callee.type&&this.out("("),this.walk(t.callee,e),"FunctionExpression"==t.callee.type&&this.out(")"),this.out("("),t.arguments){var i=this,n=0;t.arguments.forEach(function(t){n++>0&&i.out(", "),i.walk(t,e)})}this.out(")")}},t.CatchClause=function(t,e){this.out(" catch "),t.param&&(this.out("("),this.walk(t.param,e),this.out(")")),t.body&&this.walk(t.body,e)},t.ClassBody=function(t,e){this.out("{",!0),this.indent(1),this.walk(t.body,e),this.indent(-1),this.out("}",!0)},t.ClassDeclaration=function(t,e){this.out("class "),t.id&&(this.walk(t.id,e),this.out(" ")),t.superClass&&(this.trigger("Extends",t.superClass),this.out(" extends "),this.walk(t.superClass,e)),t.body&&this.walk(t.body,e)},t.ConditionalExpression=function(t,e){this.walk(t.test,e),this.out(" ? "),this.walk(t.consequent,e),this.out(" : "),this.walk(t.alternate,e)},t.ContinueStatement=function(t,e){this.nlIfNot(),this.out("continue "),t.label&&this.walk(t.label,e),this.out("",!0)},t.createContext=function(t){this._objects||(this._objects={});var e=this.createId(),i={id:e,vars:{},functions:{},parentCtx:t};return this._objects[e]=i,i},t.createId=function(t){return this._localId||(this._localId=0),this._localId++,(t?t:"")+this._localId},t.createObject=function(t,e){this._objects||(this._objects={}),this._objects[t]=e},t.DebuggerStatement=function(){this.nlIfNot(),this.out("debugger;")},t.DoWhileStatement=function(t,e){if(this.nlIfNot(),this.out("do ",!0),t.body){var i=!1;"BlockStatement"!=t.body.type&&t.body.type.indexOf("Statement")>=0&&(i=!0),i&&(this.out("{"),this.indent(1)),this.walk(t.body,e),i&&(this.indent(-1),this.out("}"))}this.out(" "),t.test&&(this.out("while("),this.trigger("DoWhileTest",t.test),this.walk(t.test,e),this.out(")")),this.out("",!0)},t.EmptyStatement=function(){},t.endBlock=function(){this.out("}",!0),this.indent(-1)},t.endCollecting=function(){this._collecting=!1},t.ExpressionStatement=function(t,e){this.nlIfNot(),this.walk(t.expression,e),this.out(";",!0)},t.find=function(){},t.ForInStatement=function(t,e){this.nlIfNot(),this.out("for"),this.out("(");var i=e._forVar;if(e._forVar=1,t.left&&(this.trigger("ForInLeft",t.left),this.walk(t.left,e)),e._forVar=i,this.out(" in "),t.right&&(this.trigger("ForInRight",t.right),this.walk(t.right,e)),this.out(")"),t.body){this.trigger("ForInBody",t.body);var n=!1;"BlockStatement"!=t.body.type&&t.body.type.indexOf("Statement")>=0&&(n=!0),n&&(this.out("{"),this.indent(1)),this.walk(t.body,e),n&&(this.indent(-1),this.out("}"))}this.out("",!0)},t.ForOfStatement=function(t,e){this.nlIfNot(),this.out("for"),this.out("(");var i=e._forVar;if(e._forVar=1,t.left&&(this.trigger("ForOfLeft",t.left),this.walk(t.left,e)),e._forVar=i,this.out(" of "),t.right&&(this.trigger("ForOfRight",t.right),this.walk(t.right,e)),this.out(")"),t.body){this.trigger("ForOfBody",t.body);var n=!1;"BlockStatement"!=t.body.type&&t.body.type.indexOf("Statement")>=0&&(n=!0),n&&(this.out("{"),this.indent(1)),this.walk(t.body,e),n&&(this.indent(-1),this.out("}"))}this.out("",!0)},t.ForStatement=function(t,e){this.out("for"),this.out("(");var i=e._forVar;if(e._forVar=1,t.init&&this.walk(t.init,e),e._forVar=i,this.out("; "),t.test&&this.walk(t.test,e),this.out("; "),t.update&&this.walk(t.update,e),this.out(")"),t.body){var n=!1;"BlockStatement"!=t.body.type&&t.body.type.indexOf("Statement")>=0&&(n=!0),n&&(this.out("{"),this.indent(1)),this.walk(t.body,e),n&&(this.indent(-1),this.out("}"))}this.out("",!0)},t.FunctionDeclaration=function(t,e){var i=this.createContext(e);t.contextId=i.id,this.out("function"),t.generator&&this.out("*"),t.id&&t.id.name?(this.trigger("FunctionName",t),this.out(" "+t.id.name+" "),t.id.name&&(e.functions[t.id.name]=t)):this.trigger("FunctionAnonymous",t);var n=this;this.out("(");var s=0;t.params.forEach(function(e){if(s++>0&&n.out(","),n.trigger("FunctionParam",e),n.walk(e,i),t.defaults&&t.defaults[s-1]){var o=t.defaults[s-1];n.out("="),n.trigger("FunctionDefaultParam",o),n.walk(o,i)}}),this.out(")"),n.trigger("FunctionBody",t.body),this.walk(t.body,i)},t.FunctionExpression=function(t,e){var i=this.createContext(e);t.contextId=i.id,this.__insideMethod||this.out("function"),t.generator&&(this.trigger("FunctionGenerator",t),this.out("* ")),t.id&&t.id.name?(this.trigger("FunctionName",t),this.out(" "+t.id.name+" "),t.id.name&&e.functions[t.id.name]==t):this.trigger("FunctionAnonymous",t);var n=this;this.out("(");var s=0;t.params.forEach(function(e){if(s++>0&&n.out(","),n.trigger("FunctionParam",e),n.walk(e,i),t.defaults&&t.defaults[s-1]){var o=t.defaults[s-1];n.out("="),n.trigger("FunctionDefaultParam",o),n.walk(o,i)}}),this.out(")"),n.trigger("FunctionBody",t.body),this.walk(t.body,i)},t.getCode=function(){return this._codeStr},t.getLineNumber=function(){return this._lineNumber},t.getParent=function(t){if(t){if(t.nodeid){var e=this._nodeParents[t.nodeid];return e}}else if(this._path){var i=this._path.length;return this._path[i-1]}},t.getStructures=function(){return this._structures},t.Identifier=function(t){this.out(t.name)},t.IfStatement=function(t,e){if(this.nlIfNot(),this.out("if("),this.trigger("IfTest",t.test),this.walk(t.test,e),this.out(")"),t.consequent){var i=!1;"BlockStatement"!=t.consequent.type&&(i=!0),this.trigger("IfConsequent",t.consequent),i&&(this.out("{"),this.indent(1)),this.walk(t.consequent,e),i&&(this.indent(-1),this.out("}"))}if(t.alternate){this.out(" else ");var i=!1;"BlockStatement"!=t.alternate.type&&(i=!0),this.trigger("IfAlternate",t.alternate),i&&(this.out("{"),this.indent(1)),this.walk(t.alternate,e),i&&(this.indent(-1),"{"!=this.prevChar()&&this.out("",!0),this.out("}"))}this.out("",!0)},t.indent=function(t){this._indent+=t,this._indent<0&&(this._indent=0)},t.__traitInit&&!t.hasOwnProperty("__traitInit")&&(t.__traitInit=t.__traitInit.slice()),t.__traitInit||(t.__traitInit=[]),t.__traitInit.push(function(t){this._structures=[],this._path=[],this._tabChar="  ",this._codeStr="",this._currentLine="",this._indent=0,this._options=t||{},this.initReactNamespace(),this.initDOMNamespace(),this.initSVGNamespace()}),t.initDOMNamespace=function(){var e=["a","abbr","acronym","address","applet","area","article","aside","audio","b","base","basefont","bdi","bdo","big","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","datalist","dd","del","details","dfn","dialog","dir","div","dl","dt","em","embed","fieldset","figcaption","figure","font","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noframes","noscript","object","ol","optgroup","option","output","p","param","pre","progress","q","rp","rt","ruby","s","sampe","script","section","select","small","source","span","strike","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","tt","u","ul","var","video","wbr"];t.DOMJSXAttribute=function(t,e){this.out('"'),"JSXNamespacedName"==t.name.type?(this.out(t.name.namespace.name),this.out(":"),this.out(t.name.name.name)):this.out(t.name.name),this.out('"'),this.out(e._fnCall?":":","),this.walk(t.value,e)},t.DOMJSXOpeningElement=function(t,i){this.out("(function() { ",!0),this.indent(1),this.out("var e,me=this;",!0);var n,s;if("JSXMemberExpression"==t.name.type){var o=t.name;o.object.name==i.ns?n=o.property.name:(n=o.property.name,s=o.object.name)}else n=t.name.name;if(!s&&e.indexOf(n)>=0){if(this.out("e=document.createElement('"+n+"');",!0),t.attributes&&t.attributes.length)for(var r=0;r<t.attributes.length;r++){var a=t.attributes[r].name.name;if(a&&"on"==a.substring(0,2)){var h=a.slice(2).toLowerCase();this.out("e.addEventListener('"+h+"', function(){me['"+a+"']("),this.walk(t.attributes[r].value,i),this.out(")});",!0)}else this.out("e.setAttribute("),this.walk(t.attributes[r],i),this.out(");",!0)}}else{this.out("var self = function(){this.parent=me;};"),this.out("self.prototype = this;",!0),this.out(s?"e = "+s+"."+n+".apply(new self(),[":"e = "+n+".apply(new self(),[");var u=i._fnCall;if(i._fnCall=!0,t.attributes&&t.attributes.length){this.out("{",!0),this.indent(1);for(var r=0;r<t.attributes.length;r++)r>0&&this.out(",",!0),this.walk(t.attributes[r],i);this.indent(-1),this.out("}")}i._fnCall=u,this.out("]);",!0)}t.selfClosing&&(this.out("return e;"),this.indent(-1),this.out("}).apply(this,[])",!0))},t.DOMLiteral=function(t){"string"==typeof t.value?(this.out('"'),this.out(t.value.split("\n").join("\\n")),this.out('"')):this.out(t.value)},t.DOMJSXExpressionContainer=function(t,e){this.walk(t.expression,e)},t.DOMJSXElement=function(t,e){var i=e._inJSX;e._inJSX=!0;var n=!1;this.walk(t.openingElement,e);if(t.children)for(var s=0;s<t.children.length;s++){var o=t.children[s];if("JSXElement"==o.type&&(this.out("e.appendChild("),this.indent(1),this.walk(o,e),this.indent(-1),this.out(")",!0)),"Literal"==o.type){var r=o.value;if("string"==typeof r){var a=r.split("\n"),h=a.join("\\n");this.out('e.appendChild(document.createTextNode("'+h+'"));',!0)}else this.out("e.appendChild(document.createTextNode("),this.walk(o,e),this.out("))",!0)}"JSXExpressionContainer"==o.type&&(n||(this.out("var expr="),this.walk(o,e),this.out(";",!0)),this.out("if(typeof(expr)=='string' || typeof(expr)=='number') {",!0),this.indent(1),this.out("e.appendChild(document.createTextNode(expr));",!0),this.indent(-1),this.out("} else {"),this.indent(1),this.out("if(expr instanceof Array) {",!0),this.indent(1),this.out("expr.forEach(function(ee){e.appendChild(ee)});",!0),this.indent(-1),this.out("} else { ",!0),this.out("if(typeof(expr)=='object')",!0),this.indent(1),this.out("e.appendChild(expr);",!0),this.indent(-1),this.out("}",!0),this.indent(-1),this.out("}"))}this.walk(t.closingElement,e),e._inJSX=i},t.DOMJSXClosingElement=function(){this.out("return e;",!0),this.indent(-1),this.out("}).apply(this,[])",!0)}},t.initReactNamespace=function(){t.reactJSXAttribute=function(t,e){this.walk(t.name,e),this.out(":"),this.walk(t.value,e)},t.reactJSXOpeningElement=function(t,e){if(console.log("reactJSXOpeningElement at namepace "+e.ns),this.out("React.createElement(",!0),this.indent(1),"JSXMemberExpression"==t.name.type){var i=t.name;"react"==i.object.name&&this.out('"'+i.property.name+'",',!0)}else t.name&&this.out('"'+t.name.name+'",',!0);if(t.attributes&&t.attributes.length){this.out("{",!0),this.indent(1);for(var n=0;n<t.attributes.length;n++)n>0&&this.out(",",!0),this.walk(t.attributes[n],e);this.indent(-1),this.out("}")}else this.out("null");t.selfClosing&&(this.indent(-1),this.out(""),this.out(")",!0))},t.reactLiteral=function(t,e){if(e._inJSX){var i=t.value.trim();if(0==i.length)return;this.out('"'),this.out(t.value.trim()),this.out('"')}else this.out(t.raw)},t.reactJSXExpressionContainer=function(t,e){this.walk(t.expression,e)},t.reactJSXElement=function(t,e){var i=e._inJSX;e._inJSX=!0,this.walk(t.openingElement,e);if(t.children)for(var n=0;n<t.children.length;n++){var s=t.children[n];("Literal"!=s.type||"string"!=typeof s.value||0!=s.value.trim().length)&&(this.out(",",!0),this.walk(t.children[n],e))}this.walk(t.closingElement,e),e._inJSX=i},t.reactJSXClosingElement=function(){this.indent(-1),this.out(""),this.out(")",!0)}},t.initSVGNamespace=function(){var e=["circle","rect","path","svg","image","line","text","tspan","g","pattern","polygon","polyline","clippath","defs","feoffset","femerge","femergenode","linearGradient","mask","polyline","feColorMatrix","radialGradient","stop","feGaussianBlur","filter"];this._autoNs||(this._autoNs={});var i=this;e.forEach(function(t){i._autoNs[t]="SVG"});t.SVGJSXAttribute=function(t,e){this.out('"'),this.out(t.name.name),this.out('"'),this.out(e._fnCall?":":","),this.walk(t.value,e)},t.SVGJSXOpeningElement=function(t,i){this.out("(function() { ",!0),this.indent(1),this.out("var e,me=this;",!0);var n,s=!1;if("JSXMemberExpression"==t.name.type){var o=t.name;o.object.name==i.ns&&(n=o.property.name)}else n=t.name.name;if(e.indexOf(n)>=0){if("svg"==n?(this.out("e=document.createElementNS('http://www.w3.org/2000/svg', 'svg');",!0),this.out('e.setAttribute("xmlns", "http://www.w3.org/2000/svg");',!0),this.out('e.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");',!0),s=!0):this.out("e=document.createElementNS('http://www.w3.org/2000/svg', '"+n+"');",!0),t.attributes&&t.attributes.length)for(var r=0;r<t.attributes.length;r++){var a=t.attributes[r].name;if("JSXIdentifier"==a.type){var h=a.name;if(h&&"on"==h.substring(0,2)){var u=h.slice(2).toLowerCase();this.out("e.addEventListener('"+u+"', function(){me['"+h+"']("),this.walk(t.attributes[r].value,i),this.out(")});",!0);continue}}if("JSXIdentifier"==a.type){if(s&&"xmlns"==a.name)continue;this.out("e.setAttributeNS(null,"),this.walk(t.attributes[r],i),this.out(");",!0)}else if("JSXNamespacedName"==a.type){if(s&&"xlink"==a.name.name)continue;s?(this.out('e.setAttribute("'+a.namespace.name+":"+a.name.name+'",'),this.walk(t.attributes[r].value,i),this.out(");",!0)):(this.out("e.setAttributeNS('http://www.w3.org/1999/"+a.namespace.name+"',"),this.out('"'),this.out(a.name.name),this.out('"'),this.out(","),this.walk(t.attributes[r].value,i),this.out(");",!0))}}}else{this.out("var self = function(){this.parent=me;};"),this.out("self.prototype = this;",!0),this.out("e = "+n+".apply(new self(),[");var l=i._fnCall;if(i._fnCall=!0,t.attributes&&t.attributes.length){this.out("{",!0),this.indent(1);for(var r=0;r<t.attributes.length;r++)r>0&&this.out(",",!0),this.walk(t.attributes[r],i);this.indent(-1),this.out("}")}i._fnCall=l,this.out("]);",!0)}t.selfClosing&&(this.out("return e;"),this.indent(-1),this.out("}).apply(this,[])",!0))},t.SVGLiteral=function(t){"string"==typeof t.value?(this.out('"'),this.out(t.value.split("\n").join("\\n")),this.out('"')):this.out(t.value)},t.SVGJSXExpressionContainer=function(t,e){this.walk(t.expression,e)},t.SVGJSXElement=function(t,e){var i=e._inJSX;e._inJSX=!0;var n=!1;this.walk(t.openingElement,e);if(t.children)for(var s=0;s<t.children.length;s++){var o=t.children[s];if("JSXElement"==o.type&&(this.out("e.appendChild("),this.indent(1),this.walk(o,e),this.indent(-1),this.out(")",!0)),"Literal"==o.type){var r=o.value;if("string"==typeof r){var a=r.split("\n"),h=a.join("\\n");this.out('e.appendChild(document.createTextNode("'+h+'"));',!0)}else this.out("e.appendChild(document.createTextNode("),this.walk(o,e),this.out("))",!0)}"JSXExpressionContainer"==o.type&&(n||(this.out("var expr="),this.walk(o,e),this.out(";",!0)),this.out("if(typeof(expr)=='string' || typeof(expr)=='number') {",!0),this.indent(1),this.out("e.appendChild(document.createTextNode(expr));",!0),this.indent(-1),this.out("} else {"),this.indent(1),this.out("if(expr instanceof Array) {",!0),this.indent(1),this.out("expr.forEach(function(ee){e.appendChild(ee)});",!0),this.indent(-1),this.out("} else { ",!0),this.out("if(typeof(expr)=='object')",!0),this.indent(1),this.out("e.appendChild(expr);",!0),this.indent(-1),this.out("}",!0),this.indent(-1),this.out("}"))}this.walk(t.closingElement,e),e._inJSX=i},t.SVGJSXClosingElement=function(){this.out("return e;",!0),this.indent(-1),this.out("}).apply(this,[])",!0)}},t.JSXAttribute=function(t,e){this.walk(t.name,e),this.out("="),this.walk(t.value,e)},t.JSXClosingElement=function(t,e){this.out("</"),this.walk(t.name,e),this.out(">")},t.JSXElement=function(t,e){this.walk(t.openingElement,e),this.out("",!0),this.indent(1),this.walk(t.children,e),this.indent(-1),t.selfClosing?this.out("/>",!0):t.closingElement&&this.walk(t.closingElement,e)},t.JSXEmptyExpression=function(){},t.JSXExpressionContainer=function(t,e){this.out("{"),this.walk(t.expression,e),this.out("}")},t.JSXIdentifier=function(t){this.out(t.name)},t.JSXMemberExpression=function(t,e){this.walk(t.object,e),t.computed?(this.out("["),this.walk(t.property,e),this.out("]")):(this.out("."),this.walk(t.property,e))},t.JSXNamespacedName=function(t){this.out(t.namespace),this.out(":"),this.out(t.name)},t.JSXOpeningElement=function(t,e){this.out("<"),this.walk(t.name,e),this.out(" "),this.walk(t.attributes,e),this.out(t.selfClosing?"/>":">")},t.JSXSpreadAttribute=function(){console.error("JSXSpreadAttribute is not implemented")},t.LabeledStatement=function(t,e){this.nlIfNot(),this.walk(t.label,e),this.out(":",!0),this.indent(1),t.body&&this.walk(t.body,e),this.indent(-1)},t.Literal=function(t){this.out(t.raw)},t.LogicalExpression=function(t,e){var i=!0,n=!0;("Identifier"==t.left.type||"Literal"==t.left.type)&&(i=!1),("Identifier"==t.right.type||"Literal"==t.right.type)&&(n=!1),i&&this.out("("),this.walk(t.left,e),i&&this.out(")"),t.operator&&this.out(" "+t.operator+" "),n&&this.out("("),this.walk(t.right,e),n&&this.out(")")},t.MemberExpression=function(t,e){this.trigger("MemberExpressionObject",t.object);var i=!0;("Identifier"==t.object.type||"Literal"==t.object.type||"ThisExpression"==t.object.type)&&(i=!1,"number"==typeof t.object.value&&(i=!0)),i&&this.out("("),this.walk(t.object,e),i&&this.out(")"),t.computed?(this.out("["),this.trigger("MemberExpressionProperty",t.property),this.walk(t.property,e),this.out("]")):(this.out("."),this.trigger("MemberExpressionProperty",t.property),this.walk(t.property,e))},t.MethodDefinition=function(t,e){t.key&&(this.__insideMethod=!0,"constructor"==t.kind&&this.trigger("ClassConstructor",t),t.static&&this.out("static "),this.walk(t.key,e),this.walk(t.value,e),this.out("",!0),this.__insideMethod=!1)},t.NewExpression=function(t,e){if(t.callee){if(this.out(" new "),this.trigger("NewExpressionClass",t.callee),this.walk(t.callee,e),this.out("("),t.arguments){var i=this,n=0;t.arguments.forEach(function(t){i.trigger("NewExpressionArgument",t),n++>0&&i.out(", "),i.walk(t,e)})}this.out(")")}},t.nlIfNot=function(){var t=this._currentLine.length;t>0&&("{"==this._currentLine[t-1]||";"==this._currentLine[t-1]?this.out("",!0):this.out(";",!0))},t.ObjectExpression=function(t,e){var i=this;try{i.out("{");var n=0;t&&t.properties&&(t.properties.length>1&&i.out("",!0),i.indent(1),t.properties.forEach(function(t){n++>0&&i.out(",",!0),i.trigger("ObjectExpressionProperty",t),i.walk(t,e)}),i.indent(-1)),i.out("}")}catch(s){console.error(s.message)}},t.ObjectPattern=function(t,e){var i=this;try{i.out("{");var n=0;t&&t.properties&&t.properties.forEach(function(t){n++>0&&i.out(","),i.trigger("ObjectExpressionProperty",t),i.walk(t,e)}),i.out("}")}catch(s){console.error(s.message)}},t.out=function(t,e){if(!this._options.noOutput){if(this._collecting){if(t){if(0==this._collectLine.length)for(var i=0;i<this._indent;i++)this._collectLine+=this._tabChar;this._collectLine+=t}return void(e&&(this._collectStr+=this._collectLine+"\n",this._collectLine="",this._collectStr+="\n"))}if(t){if(0==this._currentLine.length){this.trigger("startline"),this.trigger("tabs",this._indent);for(var i=0;i<this._indent;i++)this._currentLine+=this._tabChar}this.trigger("out",t),this._currentLine+=t}e&&(this.trigger("newline"),this._codeStr+=this._currentLine+"\n",this._currentLine="",this._lineNumber++)}},t.prevChar=function(){var t=this._currentLine.length;return t>0?this._currentLine[t-1]:"\n"},t.Program=function(t,e){this.walk(t.body,e,!0)},t.Property=function(t,e){this.trigger("ObjectPropertyKey",t.key),this.walk(t.key,e),t.shorthand||(this.out(":"),this.trigger("ObjectPropertyValue",t.value),this.walk(t.value,e))},t.pushStructure=function(t){this._structures||(this._structures=[]),this._structures.push(t)},t.RestElement=function(t,e){t.argument&&this.trigger("RestArgument",t.argument),this.out(" ..."),this.walk(t.argument,e)},t.ReturnStatement=function(t,e){this.nlIfNot(),this.out("return "),this.trigger("ReturnValue",t.argument),this.walk(t.argument,e),this.out(";")},t.saveNode=function(t){t.nodeid||(t.nodeid=this.createId()),this.createObject(t.nodeid,t)},t.SequenceExpression=function(t,e){if(t.expressions){var i=this,n=0;this.out("("),t.expressions.forEach(function(t){n++>0&&i.out(","),i.walk(t,e)}),this.out(")")}},t.skip=function(){this._skipWalk=!0},t.startBlock=function(){this.out("{",!0),this.indent(1)},t.startCollecting=function(){this._collecting=!0},t.startWalk=function(t,e){this._breakWalk=!1,this._path=[],this._codeStr="",this._currentLine="",this._lineNumber=0,this.walk(t,e),this.out("",!0)},t.Super=function(){this.out("super")},t.SwitchCase=function(t,e){if(this.nlIfNot(),t.test?(this.out("case "),this.walk(t.test,e),this.out(" : ",!0)):this.out("default: ",!0),t.consequent){var i=this;t.consequent.forEach(function(t){i.walk(t,e)})}},t.SwitchStatement=function(t,e){this.nlIfNot(),this.out("switch"),this.out("("),this.walk(t.discriminant,e),this.out(")"),this.out("{",!0),this.indent(1);var i=this;t.cases.forEach(function(t){i.walk(t,e)}),this.indent(-1),this.out("}",!0)},t.TemplateElement=function(t){this.out(t.value.raw)},t.TemplateLiteral=function(t,e){this.out("`");for(var i=0;i<t.quasis.length;i++){i>0&&(this.out("${"),t.expressions[i-1]&&this.walk(t.expressions[i-1],e),this.out("}"));var n=t.quasis[i];this.walk(n,e)}this.out("`")},t.ThisExpression=function(){this.out("this")},t.ThrowStatement=function(t,e){this.nlIfNot(),this.out("throw "),this.trigger("ThrowArgument",t.argument),this.walk(t.argument,e)},t.TryStatement=function(t,e){this.out("try "),this.walk(t.block,e),t.handler&&this.walk(t.handler,e),t.finalizer&&(this.out(" finally "),this.walk(t.finalizer,e))},t.UnaryExpression=function(t,e){var i=!0;("Identifier"==t.argument.type||"Literal"==t.argument.type)&&(i=!1),this.out(t.operator),"!"!=t.operator&&this.out(" "),i&&this.out("("),this.trigger("UnaryExpressionArgument",t.argument),this.walk(t.argument,e),i&&this.out(")")},t.UpdateExpression=function(t,e){this.trigger("UpdateExpressionArgument",t.argument),t.prefix?(this.out(t.operator),this.walk(t.argument,e)):(this.walk(t.argument,e),this.out(t.operator))},t.VariableDeclaration=function(t,e){var i=this,n=0;"var"==t.kind&&i.out("var "),"let"==t.kind&&i.out("let "),"const"==t.kind&&i.out("const ");var s=0;t.declarations.forEach(function(t){t.deleted||(n++>0&&(2==n&&(s+=2,i.indent(s)),i.out(",",!0)),i.walk(t,e))}),this.indent(-1*s),0==n&&(this._undoOutput=!0),e._forVar||this.out(";",!0)},t.VariableDeclarator=function(t,e){var i=this;t.id&&(i.walk(t.id,e),t.id.name&&(e.vars[t.id.name]=t)),t.init&&(this.out(" = "),i.walk(t.init,e))},t.walk=function(t,e,i){if(t){if(!e)return console.log("ERROR: no context defined for ",t),void console.trace();if(t instanceof Array){var n=this;this.trigger("nodeArray",{node:t,ctx:e}),t.forEach(function(t){n.walk(t,e),i&&n.nlIfNot()})}else{if(t.deleted)return;if(t.type){this.saveNode(t),t.contextId=e.id;var s=this.getParent();this._nodeParents||(this._nodeParents={}),s&&(this._nodeParents[t.nodeid]=s);var o={node:t,ctx:e};if(this.trigger("node",o),this.trigger(t.type,o),this._skipWalk)return void(this._skipWalk=!1);if(this._wCb&&this._wCb(t),this[t.type]){this._path.push(t);var r,a=this._currentLine,h=this._codeStr.length,u=!1;if("JSXElement"==t.type&&t.openingElement&&t.openingElement.name)if("JSXMemberExpression"==t.openingElement.name.type){var l=t.openingElement.name,c=l.object.name;e.nsStack||(e.nsStack=[]),e.nsStack.push(c),r=e.ns,e.ns=c,u=!0}else if(e.ns){if("DOM"==e.ns&&"svg"==t.openingElement.name.name){var c="SVG";e.nsStack||(e.nsStack=[]),e.nsStack.push(c),r=e.ns,e.ns=c,u=!0}}else{var c=this._options.defaultNamespace||"DOM",f=t.openingElement.name.name;"svg"==f&&(c="SVG"),this._autoNs&&this._autoNs[f]&&(c=this._autoNs[f]),this._options.forceNamespace&&(c=this._options.forceNamespace),e.nsStack||(e.nsStack=[]),e.nsStack.push(c),r=e.ns,e.ns=c,u=!0}if(e.ns){var d=e.ns+t.type;"undefined"!=typeof this[d]?this[d](t,e):this[t.type](t,e)}else this[t.type](t,e);u&&(e.nsStack.pop(),e.ns=r),this._undoOutput&&(this._codeStr=this._codeStr.substring(0,h),this._currentLine=a,this._undoOutput=!1),this._path.pop()}else console.log("Did not find "+t.type),console.log(t);this.trigger("nodeWalked",o),this.trigger("After"+t.type,o)}}}},t.walkAsString=function(t,e){var i="";try{this.startCollecting(),this._collectStr="",this._collectLine="",this.walk(t,e),i=this._collectStr,this.endCollecting()}catch(n){}return i},t.WhileStatement=function(t,e){if(this.nlIfNot(),this.out("while "),t.test&&(this.trigger("WhileTest",t.test),this.out("("),this.walk(t.test,e),this.out(")")),t.body){var i=!1;"BlockStatement"!=t.body.type&&t.body.type.indexOf("Statement")>=0&&(i=!0),i&&(this.out("{"),this.indent(1)),this.walk(t.body,e),i&&(this.indent(-1),this.out("}"))}this.out("",!0)},t.WithStatement=function(){console.error("With statement is not supported")},t.YieldExpression=function(t,e){this.out("yield "),this.walk(t.argument,e)}}(this)},ASTWalker=function(t,e,i,n,s,o,r,a){var h,u=this;if(!(u instanceof ASTWalker))return new ASTWalker(t,e,i,n,s,o,r,a);var l=[t,e,i,n,s,o,r,a];if(u.__factoryClass)if(u.__factoryClass.forEach(function(t){h=t.apply(u,l)}),"function"==typeof h){if(h._classInfo.name!=ASTWalker._classInfo.name)return new h(t,e,i,n,s,o,r,a)}else if(h)return h;u.__traitInit?u.__traitInit.forEach(function(t){t.apply(u,l)}):"function"==typeof u.init&&u.init.apply(u,l)};ASTWalker._classInfo={name:"ASTWalker"},ASTWalker.prototype=new ASTWalker_prototype,function(){"undefined"!=typeof define&&null!==define&&null!=define.amd?(__amdDefs__.ASTWalker=ASTWalker,this.ASTWalker=ASTWalker):"undefined"!=typeof module&&null!==module&&null!=module.exports?module.exports.ASTWalker=ASTWalker:this.ASTWalker=ASTWalker}.call(new Function("return this")()),"undefined"!=typeof define&&null!==define&&null!=define.amd&&define(__amdDefs__),setTimeout(function(){if("undefined"!=typeof espree)for(var list=document.querySelectorAll('script[type="text/ASTWalker"]'),i=0;i<list.length;i++){var codeStr=list[i].text;if(codeStr){var rawAST=espree.parse(codeStr,{range:!0,loc:!0,comments:!0,attachComment:!0,tokens:!0,tolerant:!0,ecmaVersion:5,sourceType:"script",ecmaFeatures:{jsx:!0,globalReturn:!0,experimentalObjectRestSpread:!0}}),walker=ASTWalker({defaultNamespace:"DOM"});walker.startWalk(rawAST,walker.createContext());var strCode=walker.getCode();eval(strCode)}}},1)}).call(new Function("return this")());