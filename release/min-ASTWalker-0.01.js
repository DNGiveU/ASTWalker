(function(){var t={},i=function(){!function(t){t.on=function(t,i){return this._ev||(this._ev={}),this._ev[t]||(this._ev[t]=[]),this._ev[t].push(i),this},t.removeListener=function(t,i){if(this._ev&&this._ev[t])for(var e=this._ev[t],n=0;n<e.length;n++)if(e[n]==i)return void e.splice(n,1)},t.trigger=function(t,i,e){if(this._ev&&this._ev[t]){return this._ev[t].forEach(function(t){t(i,e)}),this}}}(this),function(t){t.ArrayExpression=function(t,i){var e=this;if(t.elements&&t.elements.length>0){this.out("[");var n=0;t.elements.forEach(function(t){n++>0&&e.out(","),e.trigger("ArrayElement",t),e.walk(t,i)}),this.out("]")}},t.ArrayPattern=function(t,i){var e=this;if(t.elements&&t.elements.length>0){this.out("[");var n=0;t.elements.forEach(function(t){n++>0&&e.out(","),e.trigger("ArrayElement",t),e.walk(t,i)}),this.out("]")}},t.ArrowExpression=function(){},t.ArrowFunctionExpression=function(t,i){this.out("function"),t.generator&&(this.trigger("FunctionGenerator",t),this.out("* ")),t.id&&t.id.name?(console.log("ERROR: ArrowFunctionExpression should not have name"),this.trigger("FunctionName",t),this.out(" "+t.id.name+" ")):this.trigger("FunctionAnonymous",t);var e=this;this.out("(");var n=0;t.params.forEach(function(s){if(n++>0&&e.out(","),e.trigger("FunctionParam",s),e.walk(s,i),t.defaults&&t.defaults[n-1]){var o=t.defaults[n-1];e.out("="),e.trigger("FunctionDefaultParam",o),e.walk(o,i)}}),this.out(")"),e.trigger("FunctionBody",t.body),this.walk(t.body,i)},t.AssignmentExpression=function(t,i){this.trigger("AssigmentLeft",t.left),this.walk(t.left,i),this.out(" "+t.operator+" "),this.trigger("AssigmentRight",t.right),this.walk(t.right,i)},t.BinaryExpression=function(t,i){this.walk(t.left,i),this.out(" "+t.operator+" "),this.walk(t.right,i)},t.BlockStatement=function(t,i){this.out("{",!0),this.indent(1),this.walk(t.body,i,!0),this.indent(-1),this.out("}")},t.BreakStatement=function(){this.out("break",!0)},t.breakWalk=function(){this._breakWalk=!0},t.CallExpression=function(t,i){if(t.callee){if(this.walk(t.callee,i),this.out("("),t.arguments){var e=this,n=0;t.arguments.forEach(function(t){n++>0&&e.out(", "),e.walk(t,i)})}this.out(")")}},t.CatchClause=function(t,i){this.out(" catch "),t.param&&(this.out("("),this.walk(t.param,i),this.out(")")),t.body&&this.walk(t.body,i)},t.ClassBody=function(t,i){this.out("{",!0),this.indent(1),this.walk(t.body,i),this.indent(-1),this.out("}",!0)},t.ClassDeclaration=function(t,i){this.out("class "),t.id&&(this.walk(t.id,i),this.out(" ")),t.superClass&&(this.trigger("Extends",t.superClass),this.out(" extends "),this.walk(t.superClass,i)),t.body&&this.walk(t.body,i)},t.ConditionalExpression=function(t,i){this.walk(t.test,i),this.out(" ? "),this.walk(t.consequent,i),this.out(" : "),this.walk(t.alternate,i)},t.ContinueStatement=function(){this.out("continue",!0)},t.DebuggerStatement=function(){this.out("debugger;")},t.DoWhileStatement=function(t,i){this.out("do {",!0),t.body&&this.walk(t.body,i),this.out(" } "),t.test&&(this.out("while("),this.trigger("DoWhileTest",t.test),this.out(")")),this.out("",!0)},t.EmptyStatement=function(){},t.endBlock=function(){this.out("}",!0),this.indent(-1)},t.endCollecting=function(){this._collecting=!1},t.ExpressionStatement=function(t,i){this.walk(t.expression,i)},t.ForInStatement=function(t,i){this.out("for("),t.left&&(this.trigger("ForInLeft",t.left),this.walk(t.left,i)),this.out(" in "),t.right&&(this.trigger("ForInRight",t.right),this.walk(t.right,i)),this.out(")"),t.body&&(this.trigger("ForInBody",t.body),this.walk(t.body,i)),this.out("",!0)},t.ForOfStatement=function(t,i){this.out("for("),t.left&&(this.trigger("ForOfLeft",t.left),this.walk(t.left,i)),this.out(" of "),t.right&&(this.trigger("ForOfRight",t.right),this.walk(t.right,i)),this.out(")"),t.body&&(this.trigger("ForOfBody",t.body),this.walk(t.body,i)),this.out("",!0)},t.ForStatement=function(t,i){this.out("for("),t.init&&(this.walk(t.init,i),this.out("; ")),t.test&&(this.walk(t.test,i),this.out("; ")),t.update&&this.walk(t.update,i),this.out(")"),t.body&&this.walk(t.body,i),this.out("",!0)},t.FunctionDeclaration=function(t,i){this.out("function"),t.id&&t.id.name?(this.trigger("FunctionName",t),this.out(" "+t.id.name+" ")):this.trigger("FunctionAnonymous",t);var e=this;this.out("(");var n=0;t.params.forEach(function(s){if(n++>0&&e.out(","),e.trigger("FunctionParam",s),e.walk(s,i),t.defaults&&t.defaults[n-1]){var o=t.defaults[n-1];e.out("="),e.trigger("FunctionDefaultParam",o),e.walk(o,i)}}),this.out(")"),e.trigger("FunctionBody",t.body);var s={parentCtx:i};this.walk(t.body,s)},t.FunctionExpression=function(t,i){this.__insideMethod||this.out("function"),t.generator&&(this.trigger("FunctionGenerator",t),this.out("* ")),t.id&&t.id.name?(this.trigger("FunctionName",t),this.out(" "+t.id.name+" ")):this.trigger("FunctionAnonymous",t);var e=this;this.out("(");var n=0;t.params.forEach(function(s){if(n++>0&&e.out(","),e.trigger("FunctionParam",s),e.walk(s,i),t.defaults&&t.defaults[n-1]){var o=t.defaults[n-1];e.out("="),e.trigger("FunctionDefaultParam",o),e.walk(o,i)}}),this.out(")");var s={parentCtx:i};e.trigger("FunctionBody",t.body),this.walk(t.body,s)},t.getStructures=function(){return this._structures},t.Identifier=function(t){this.out(t.name)},t.IfStatement=function(t,i){this.out("if("),this.trigger("IfTest",t.test),this.walk(t.test,i),this.out(")"),t.consequent&&(this.trigger("IfConsequent",t.consequent),this.walk(t.consequent,i)),t.alternate&&(this.out(" else "),this.trigger("IfAlternate",t.alternate),this.walk(t.alternate,i)),this.out("",!0)},t.indent=function(t){this._indent+=t,this._indent<0&&(this._indent=0)},t.__traitInit&&!t.hasOwnProperty("__traitInit")&&(t.__traitInit=t.__traitInit.slice()),t.__traitInit||(t.__traitInit=[]),t.__traitInit.push(function(t){this._structures=[],this._tabChar="  ",this._codeStr="",this._currentLine="",this._indent=0,this._options=t||{}}),t.LabeledStatement=function(t,i){this.walk(t.label,i),this.out(":",!0),this.indent(1),t.body&&this.walk(t.body,i),this.indent(-1)},t.Literal=function(t){this.out(t.raw)},t.LogicalExpression=function(t,i){t.left&&this.walk(t.left,i),t.operator&&this.out(" "+t.operator+" "),t.right&&this.walk(t.right,i)},t.MemberExpression=function(t,i){this.trigger("MemberExpressionObject",t.object),this.walk(t.object,i),t.computed?(this.out("["),this.trigger("MemberExpressionProperty",t.property),this.walk(t.property,i),this.out("]")):(this.out("."),this.trigger("MemberExpressionProperty",t.property),this.walk(t.property,i))},t.MethodDefinition=function(t,i){t.key&&(this.__insideMethod=!0,"constructor"==t.kind&&this.trigger("ClassConstructor",t),t.static&&this.out("static "),this.walk(t.key,i),this.walk(t.value,i),this.out("",!0),this.__insideMethod=!1)},t.NewExpression=function(t,i){if(t.callee){if(this.trigger("NewExpressionClass",t.callee),this.walk(t.callee,i),this.out("("),t.arguments){var e=this,n=0;t.arguments.forEach(function(t){e.trigger("NewExpressionArgument",t),n++>0&&e.out(", "),e.walk(t,i)})}this.out(")")}},t.nlIfNot=function(){this._currentLine.length>0&&this.out("",!0)},t.ObjectExpression=function(t,i){var e=this;try{e.out("{");var n=0;t&&t.properties&&(t.properties.length>1&&e.out("",!0),e.indent(1),t.properties.forEach(function(t){n++>0&&e.out(",",!0),e.trigger("ObjectExpressionProperty",t),e.walk(t,i)}),e.indent(-1)),e.out("}")}catch(s){console.error(s.message)}},t.ObjectPattern=function(t,i){var e=this;try{e.out("{");var n=0;t&&t.properties&&(t.properties.length>1&&e.out("",!0),t.properties.forEach(function(t){n++>0&&e.out(","),e.trigger("ObjectExpressionProperty",t),e.walk(t,i)})),e.out("}")}catch(s){console.error(s.message)}},t.out=function(t,i){if(this._collecting){if(t){if(0==this._collectLine.length)for(var e=0;e<this._indent;e++)this._collectLine+=this._tabChar;this._collectLine+=t}return void(i&&(this._collectStr+=this._collectLine+"\n",this._collectLine="",this._collectStr+="\n"))}if(t){if(0==this._currentLine.length)for(var e=0;e<this._indent;e++)this._currentLine+=this._tabChar;this._currentLine+=t}i&&(this._codeStr+=this._currentLine+"\n",this._currentLine="")},t.Program=function(t,i){this.walk(t.body,i,!0)},t.Property=function(t,i){this.trigger("ObjectPropertyKey",t.key),this.walk(t.key,i),this.out(":"),this.trigger("ObjectPropertyValue",t.value),this.walk(t.value,i)},t.pushStructure=function(t){this._structures||(this._structures=[]),this._structures.push(t)},t.RestElement=function(t,i){t.argument&&this.trigger("RestArgument",t.argument),this.out(" ..."),this.walk(t.argument,i)},t.ReturnStatement=function(t,i){this.out("return "),this.trigger("ReturnValue",t.argument),this.walk(t.argument,i),this.out(";")},t.SequenceExpression=function(t,i){if(t.expressions){var e=this,n=0;this.out("("),t.expressions.forEach(function(t){n++>0&&e.out(","),e.walk(t,i)}),this.out(")")}},t.skip=function(){this._skipWalk=!0},t.startBlock=function(){this.out("{",!0),this.indent(1)},t.startCollecting=function(){this._collecting=!0},t.startWalk=function(t,i){this._breakWalk=!1,this._path=[],this.walk(t,i),this.out("",!0)},t.Super=function(){this.out("super")},t.SwitchCase=function(t,i){if(this.out("case "),this.walk(t.test,i),this.out(" : ",!0),t.consequent){var e=this;t.consequent.forEach(function(t){e.walk(t,i)})}},t.SwitchStatement=function(t,i){this.out("switch("),this.walk(t.discriminant,i),this.out(")"),this.out("{",!0),this.indent(1);var e=this;t.cases.forEach(function(t){e.walk(t,i)}),this.indent(-1),this.out("}",!0)},t.ThisExpression=function(){this.out("this")},t.ThrowStatement=function(t,i){this.out("throw "),this.trigger("ThrowArgument",t.argument),this.walk(t.argument,i)},t.TryStatement=function(t,i){this.out("try "),this.walk(t.block,i),t.handler&&this.walk(t.handler,i),t.finalizer&&(this.out(" finally "),this.walk(t.finalizer,i))},t.UnaryExpression=function(t,i){this.out(t.operator),this.trigger("UnaryExpressionArgument",t.argument),this.walk(t.argument,i)},t.UpdateExpression=function(t,i){this.trigger("UpdateExpressionArgument",t.argument),this.walk(t.argument,i),this.out(t.operator)},t.VariableDeclaration=function(t,i){var e=this,n=0;"var"==t.kind&&e.out("var "),"let"==t.kind&&e.out("let ");var s=0;t.declarations.forEach(function(t){n++>0&&(1==n&&(s++,e.indent(1)),e.out(",",!0)),e.walk(t,i),n++}),this.indent(-1*s)},t.VariableDeclarator=function(t,i){var e=this;e.out(t.id.name+" = "),e.walk(t.init,i)},t.walk=function(t,i,e){if(t){if(!i)return console.log("ERROR: no context defined for ",t),void console.trace();if(t instanceof Array){var n=this;t.forEach(function(t){n.walk(t,i),e&&n.nlIfNot()})}else if(t.type){if(this.trigger(t.type,t),this._skipWalk)return void(this._skipWalk=!1);this._wCb&&this._wCb(t),this[t.type]?(this._path.push(t),this[t.type](t,i),this._path.pop()):(console.log("Did not find "+t.type),console.log(t)),this.trigger("After"+t.type,t)}}},t.walkAsString=function(t,i){var e="";try{this.startCollecting(),this._collectStr="",this._collectLine="",this.walk(t,i),e=this._collectStr,this.endCollecting()}catch(n){}return e},t.WhileStatement=function(t,i){this.out("while "),t.test&&(this.trigger("WhileTest",t.test),this.walk(t.test,i)),t.body&&this.walk(t.body,i),this.out("",!0)},t.WithStatement=function(){console.error("With statement is not supported")},t.YieldExpression=function(t,i){this.out("yield "),this.walk(t.argument,i)}}(this)},e=function(t,i,n,s,o,r,h,a){var u,l=this;if(!(l instanceof e))return new e(t,i,n,s,o,r,h,a);var c=[t,i,n,s,o,r,h,a];if(l.__factoryClass)if(l.__factoryClass.forEach(function(t){u=t.apply(l,c)}),"function"==typeof u){if(u._classInfo.name!=e._classInfo.name)return new u(t,i,n,s,o,r,h,a)}else if(u)return u;l.__traitInit?l.__traitInit.forEach(function(t){t.apply(l,c)}):"function"==typeof l.init&&l.init.apply(l,c)};e._classInfo={name:"ASTWalker"},e.prototype=new i,function(){"undefined"!=typeof define&&null!==define&&null!=define.amd?(t.ASTWalker=e,this.ASTWalker=e):"undefined"!=typeof module&&null!==module&&null!=module.exports?module.exports.ASTWalker=e:this.ASTWalker=e}.call(new Function("return this")()),"undefined"!=typeof define&&null!==define&&null!=define.amd&&define(t)}).call(new Function("return this")());