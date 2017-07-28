const Dom = document, Win = window, ClassNode = function (type) {
    return Dom.getElementsByClassName(type)
}, IdNode = function (type) {
    return Dom.getElementById(type)
}, TarNode = function (type) {
    return Dom.getElementsByTagName(type)
};
let detailsData = [
    //Object部分开始----------------------------------------------------
    {
        title: "Object - length()",
        mathod: "length()",
        alt: "获取对象的键值对个数。",
        grammar: "Object.length()",
        text: "现在、Object也可以像Array一样便捷的获取length。",
        tebel: [{
            name: "无参数！",
            value: "不用传参！"
        }]
    },
    {
        title: "Object - IsIndex()",
        mathod: "IsIndex()",
        alt: "可以以数字索引方式获取或修改对象中相应键值对的值。",
        grammar: "Object.IsIndex( index, type, value)",
        text: "现在、Object可以通过数字下标来获取或修改相应键值。",
        tebel: [
            {
                name: "index",
                value: "接受一个索引 Number类型。"
            },
            {
                name: "type",
                value: "设置键值的返回方式 'array'=>([name,value]);'object'=>({name:value});其他或不传只返回(value); String类型。"
            },
            {
                name: "value",
                value: "设置新的键值，不设置可以不传。"
            }
        ]
    },
    {
        title: "Object - IsEach()",
        mathod: "IsEach()",
        alt: "对Object进行遍历。",
        grammar: "Object.IsEach(callback)",
        text: "现在、Object也可以像Array一样便捷的遍历。",
        tebel: [
            {
                name: "callback",
                value: "回掉函数，接受一个函数 每有一个键值对执行一次callback并向其传入三个参数(KeyValue,KeyName,index)"
            },
            {
                name: "KeyValue",
                value: "像callback传入的第一个参数=>当前键值对的键值、类型取决于相应键值。"
            },
            {
                name: "KeyName",
                value: "像callback传入的第二个参数=>当前键值对的键名、String类型。"
            },
            {
                name: "index",
                value: "像callback传入的第三个参数=>当前键值对在对象中的位置、Number类型。"
            },
            {
                name: "关于返回值",
                value: "返回值为一个Array、Array中的内容取决于用户callback中的返回值。"
            }
        ]
    },
    {
        title: "Object - IsClone()",
        mathod: "IsClone()",
        alt: "得到一个当前Object的克隆体。",
        grammar: "Object.IsClone(boolean)",
        text: "现在、Object可以快速的施放影分身。",
        tebel: [
            {
                name: "boolean",
                value: "可以传个true，传true可以返回一个完整的分身，包括当前Object内部Object类型的键值，简称完全影分身。"
            }
        ]
    },
    //Object部分结束----------------------------------------------------
    //Array部分开始----------------------------------------------------
    {
        title: "Array - AllAnimate()",
        mathod: "AllAnimate()",
        alt: "可以对数组中所有的Dom元素施加Animate。",
        grammar: "Array.AllAnimate( style, time, callback)",
        text: "现在、如果你有一个装满Dom元素的数组那么你可以快速地对它们施加动画而无需循环<br>遗憾的是这个支持的动画样式还是不是很多，当然，后期会加的。",
        tebel: [
            {
                name: "style",
                value: "可以为一个对象，所有元素都执行这一个动画，或是一个数组，包含多个对象，每个元素对应不同动画。"
            },
            {
                name: "time",
                value: "可以为一个Number，所有动画时间都一样，或是一个数组，包含多个Number，每个动画对应不同时间。"
            },
            {
                name: "callback",
                value: "可以为一个Function，会在最后一个时间最长的动画执行完后被执行，或是一个数组，包含多个Function。"
            }
        ]
    },
    {
        title: "Array - AllIsStyle()",
        mathod: "AllIsStyle()",
        alt: "可以更改数组中所有的Dom元素的style样式。",
        grammar: "Array.AllIsStyle(style)",
        text: "现在、如果你有一个装满Dom元素的数组那么你可以快速地更改他们的style样式。",
        tebel: [
            {
                name: "style",
                value: "可以为一个对象，为所有元素设置一个样式，或是一个数组，包含多个对象，每个元素设置不同样式。"
            }
        ]
    },
    {
        title: "Array - AllremoveClass()",
        mathod: "AllremoveClass()",
        alt: "可以对数组中所有Dom元素进行删除ClassName操作。",
        grammar: "Array.AllremoveClass(className)",
        text: "现在、如果你有一个装满Dom元素的数组那么你可以快速地更改他们的className。",
        tebel: [
            {
                name: "className",
                value: "接受要删除的Class名,可以只有一个字符串，或是一个数组，每个元素删除不同Class名。"
            }
        ]
    },
    {
        title: "Array - AlladdClass()",
        mathod: "AlladdClass()",
        alt: "可以对数组中所有Dom元素进行添加ClassName操作。",
        grammar: "Array.AlladdClass(className)",
        text: "现在、如果你有一个装满Dom元素的数组那么你可以快速地更改他们的className。",
        tebel: [
            {
                name: "className",
                value: "接受要添加的Class名,可以只有一个字符串，或是一个数组，每个元素添加不同Class名。"
            }
        ]
    },
    {
        title: "Array - AlltoggleClass()",
        mathod: "AlltoggleClass()",
        alt: "可以对数组中所有Dom元素进行切换ClassName操作。",
        grammar: "Array.AlltoggleClass(className)",
        text: "现在、如果你有一个装满Dom元素的数组那么你可以快速地更改他们的className。",
        tebel: [
            {
                name: "className",
                value: "接受要切换的Class名,可以只有一个字符串，或是一个数组，每个元素切换不同Class名。"
            }
        ]
    },
    {
        title: "Array - Allchildren()",
        mathod: "Allchildren()",
        alt: "可以获取当前数组中所有元素的子节点，返回新数组。",
        grammar: "Array.Allchildren(type)",
        text: "快速获取多个元素的子节点，还可以进行类型筛选。",
        tebel: [
            {
                name: "type",
                value: "只支持按class名或标签名筛选，格式('div') || ('.box')"
            }
        ]
    },
    {
        title: "Array - Allclick()",
        mathod: "Allclick()",
        alt: "可以批量设置数组中元素的onclick事件。",
        grammar: "Array.Allclick( callback, bind)",
        text: "后续会考虑加入更多事件，以及事件绑定，兼容处理等。",
        tebel: [
            {
                name: "callback",
                value: "元素点击触发的函数，也可以为一个数组，每个元素点击触发不同函数。"
            },
            {
                name: "bind",
                value: "每个元素对应的callback触发时要绑定的this，不传的话默认this是该节点，支持数组(测试 可能会有bug)。"
            }
        ]
    },
    {
        title: "Array - delText()",
        mathod: "delText()",
        alt: "可以删除存有Dom元素数组中所有文本节点元素。",
        grammar: "Array.delText()",
        text: "可以删除存有Dom元素数组中所有文本节点元素。",
        tebel: [
            {
                name: "无参数！",
                value: "不用传参！"
            }
        ]
    },
    {
        title: "Array - IsScreen()",
        mathod: "IsScreen()",
        alt: "对数组中的Dom元素进行筛选。",
        grammar: "Array.IsScreen(type)",
        text: "对数组中的Dom元素进行筛选。",
        tebel: [
            {
                name: "type",
                value: "只支持按class名或标签名筛选，格式('div') || ('.box')"
            }
        ]
    },
    {
        title: "Array - delRepeat()",
        mathod: "delRepeat()",
        alt: "可以快速地进行数组去重，返回去重之后的新数组。",
        grammar: "Array.delRepeat()",
        text: "现在、数组去重变得便捷。",
        tebel: [
            {
                name: "无参数！",
                value: "不用传参！"
            }
        ]
    },
    {
        title: "Array - delTarget()",
        mathod: "delTarget()",
        alt: "可以删除数组中与指定元素相同的所有元素。",
        grammar: "Array.delTarget(value)",
        text: "现在可以快速删除数组中与指定元素相同的元素，返回值是处理完毕后的当前数组。",
        tebel: [
            {
                name: "value",
                value: "接受任意值。"
            }
        ]
    },
    {
        title: "Array - IsIndex()",
        mathod: "IsIndex()",
        alt: "可以找出数组中与指定元素相同的元素，返回值是存放有相应元素索引的数组。",
        grammar: "Array.IsIndex(value)",
        text: "快速找出某个元素在数组中出现的所有位置，返回数组。",
        tebel: [
            {
                name: "value",
                value: "接受任意值。"
            }
        ]
    },
    //Array部分结束----------------------------------------------------
    //HTMLCollection部分结束----------------------------------------------------
    {
        title: "HTMLCollection - GoArray()",
        mathod: "GoArray()",
        alt: "可以将HTMLCollection类数组对象转换为数组，返回数组。",
        grammar: "HTMLCollection.GoArray()",
        text: "document.getElementsByTagName('div')返回的即是HTMLCollection类数组对象。",
        tebel: [
            {
                name: "无参数！",
                value: "不用传参！"
            }
        ]
    },
    {
        title: "HTMLCollection - IsScreen()",
        mathod: "IsScreen()",
        alt: "对Dom元素进行筛选，返回值是数组。",
        grammar: "HTMLCollection.IsScreen(type)",
        text: "对Dom元素进行筛选。",
        tebel: [
            {
                name: "type",
                value: "只支持按class名或标签名筛选，格式('div') || ('.box')"
            }
        ]
    },
    {
        title: "HTMLCollection - AllremoveClass()",
        mathod: "AllremoveClass()",
        alt: "可以对所有Dom元素进行删除ClassName操作。",
        grammar: "HTMLCollection.AllremoveClass(className)",
        text: "现在、你可以快速地更改他们的className。",
        tebel: [
            {
                name: "className",
                value: "接受要删除的Class名,可以只有一个字符串，或是一个数组，每个元素删除不同Class名。"
            }
        ]
    },
    {
        title: "HTMLCollection - AlladdClass()",
        mathod: "AlladdClass()",
        alt: "可以对所有Dom元素进行添加ClassName操作。",
        grammar: "HTMLCollection.AlladdClass(className)",
        text: "现在、你可以快速地更改他们的className。",
        tebel: [
            {
                name: "className",
                value: "接受要添加的Class名,可以只有一个字符串，或是一个数组，每个元素添加不同Class名。"
            }
        ]
    },
    {
        title: "HTMLCollection - AlltoggleClass()",
        mathod: "AlltoggleClass()",
        alt: "对所有Dom元素进行切换ClassName操作。",
        grammar: "HTMLCollection.AlltoggleClass(className)",
        text: "现在、你可以快速地更改他们的className。",
        tebel: [
            {
                name: "className",
                value: "接受要切换的Class名,可以只有一个字符串，或是一个数组，每个元素切换不同Class名。"
            }
        ]
    },
    {
        title: "HTMLCollection - AllAnimate()",
        mathod: "AllAnimate()",
        alt: "可以对所有的Dom元素施加Animate。",
        grammar: "HTMLCollection.AllAnimate( style, time, callback)",
        text: "现在、你可以快速地对它们施加动画<br>遗憾的是这个支持的动画样式还是不是很多，当然，后期会加的。",
        tebel: [
            {
                name: "style",
                value: "可以为一个对象，所有元素都执行这一个动画，或是一个数组，包含多个对象，每个元素对应不同动画。"
            },
            {
                name: "time",
                value: "可以为一个Number，所有动画时间都一样，或是一个数组，包含多个Number，每个动画对应不同时间。"
            },
            {
                name: "callback",
                value: "可以为一个Function，会在最后一个时间最长的动画执行完后被执行，或是一个数组，包含多个Function。"
            }
        ]
    },
    {
        title: "HTMLCollection - delText()",
        mathod: "delText()",
        alt: "可以删除所有文本节点元素。",
        grammar: "HTMLCollection.delText()",
        text: "可以删除所有文本节点元素。",
        tebel: [
            {
                name: "无参数！",
                value: "不用传参！"
            }
        ]
    },
    //HTMLCollection部分结束----------------------------------------------------
    //Element部分开始----------------------------------------------------
    {
        title: "Element - repeat()",
        mathod: "repeat()",
        alt: "可以对模板节点进行基于原位的循环、返回值为存放有所有循环得到节点的数组。",
        grammar: "Element.repeat(Array)",
        text: "方便快速地对某个节点循环并给予相应数据。",
        tebel: [
            {
                name: "Array",
                value: "接受一个存放多个对象的数组，具体看下面。"
            },
            {
                name: "页面中模板的格式",
                value: "<xmp class='xmp'>格式：<div><img src='{{url}}' /><p>{{text}}</p></div>。</xmp>"
            },
            {
                name: "Array的格式",
                value: "let Array=[{url:'./01.png',text:'文字01'},{url:'./02.png',text:'文字02'}]"
            }
        ]
    },
    {
        title: "Element - toElementStr()",
        mathod: "toElementStr()",
        alt: "将获取到的Dom元素转换成字符串并返回。",
        grammar: "Element.toElementStr()",
        text: "可以快速地将Dom元素转换成字符串进行处理。",
        tebel: [
            {
                name: "无参数！",
                value: "不用传参！"
            }
        ]
    },
    {
        title: "Element - replace()",
        mathod: "replace()",
        alt: "可以将某个Dom元素替换为另一个指定元素、基于原来位置。",
        grammar: "Element.replace(Element)",
        text: "快速替换页面中的元素并保持原位。",
        tebel: [
            {
                name: "Element",
                value: "接受一个Dom元素。"
            }
        ]
    },
    {
        title: "Element - wrap()",
        mathod: "wrap()",
        alt: "把一个节点包裹在另一个节点之上、在Dom树中位置不变。当前节点为被包裹对象。",
        grammar: "Element.wrap(Element)",
        text: "可以快速给当前节点穿衣服、对了、返回值是穿完衣服后节点、即包裹体。",
        tebel: [
            {
                name: "Element",
                value: "接受一个Dom节点。"
            },
            {
                name: "节点格式(一)",
                value: "可以是这样document.createElement('div')创建的。"
            },
            {
                name: "节点格式(二)",
                value: "<xmp class='xmp'>也可以是这样的字符串：'<div>当前元素会在这</div>'。</xmp>"
            },
            {
                name: "节点格式(三)",
                value: "<xmp class='xmp'>亦可以是这样多层：'<div><span><p>当前元素会在这</p></span></div>'。</xmp>"
            },
            {
                name: "关于包裹体",
                value: "<xmp class='xmp'>'<div class='class'><span style='color:#fff'><p></p></span></div>'加样式，属性什么的都是可以的。</xmp>"
            },
            {
                name: "关于包裹体",
                value: "<xmp class='xmp'>'<div><p>当前元素会在这</p><p></p></div><div></div>'它只会沿着第一层向内走到最里面。</xmp>"
            }
        ]
    },
    {
        title: "Element - IsScroll()",
        mathod: "IsScroll()",
        alt: "是一个写好兼容的Scroll方法(Firefox/IE/Opera/Chrome)。",
        grammar: "Element.IsScroll(callbackUp, callbackDown)",
        text: "我左边的List、没有滚动条因为overflow:hidden、然后借助此方法实现滚动。",
        tebel: [
            {
                name: "callbackUp",
                value: "滚轮向上滚动就会触发这个callback函数。"
            },
            {
                name: "callbackDown",
                value: "滚轮向下滚动就会触发这个callback函数。"
            }
        ]
    },
    {
        title: "Element - getStyle()",
        mathod: "getStyle()",
        alt: "获取元素的某个样式。返回值即为样式值。",
        grammar: "Element.getStyle(StyleName)",
        text: "获取元素的某个样式。即使其存在与外部样式表中。如果没有设置过可能会出现auto。",
        tebel: [
            {
                name: "StyleName",
                value: "接受样式名例如'width' 'height' 'margin' 等。"
            }
        ]
    },
    {
        title: "Element - IsStyle()",
        mathod: "IsStyle()",
        alt: "以对象形式为元素批量设置style样式。",
        grammar: "Element.IsStyle(Object)",
        text: "以对象形式为元素设置样式会很方便。",
        tebel: [
            {
                name: "Object",
                value: "接受一个这样的对象{width:'100px',height:'100px'}。"
            }
        ]
    },
    {
        title: "Element - animate()",
        mathod: "animate()",
        alt: "为元素添加动画。",
        grammar: "Element.animate(style, time, callback)",
        text: "让元素的样式从当前样式变到另一个样式、以一定时间。",
        tebel: [
            {
                name: "style",
                value: "接受一个存放有目标样式的对象。"
            },
            {
                name: "time",
                value: "接受一个时间。"
            },
            {
                name: "callback",
                value: "接受一个回掉函数。"
            },
            {
                name: "目前支持样式",
                value: "[<span style='color: red'>width,height,opacity,zIndex,borderWidth,top,left,right,bottom,margin,padding,marginTop,marginBottom</span>]"
            },
            {
                name: "目前支持样式",
                value: "[<span style='color: red'>marginLeft,marginRight,paddingTop,paddingBottom,paddingLeft,paddingRight,lineHeight,fontSize</span>]"
            },
            {
                name: "会不断更新，增加",
                value: ""
            }
        ]
    },
    {
        title: "Element - Stop()",
        mathod: "Stop()",
        alt: "可以暂停当前元素所有正在进行的Animate并保存状态。",
        grammar: "Element.Stop(boolean)",
        text: "可以暂停当前元素所有正在进行的Animate并保存状态。(这个和JQuery不一样)。",
        tebel: [
            {
                name: "boolean",
                value: "接受true，传了true就不会保存状态，Start即失效，不传可以保留状态，以后可以用Start继续。"
            }
        ]
    },
    {
        title: "Element - Start()",
        mathod: "Start()",
        alt: "当前元素会继续上次未完成的动画。",
        grammar: "Element.Start()",
        text: "从上次保留的位置开始，如果你Stop的时候穿了true，那就无法继续了。",
        tebel: [
            {
                name: "无参数！",
                value: "不用传参！"
            }
        ]
    },
    {
        title: "Element - removeClass()",
        mathod: "removeClass()",
        alt: "删除元素指定样式名。",
        grammar: "Element.removeClass(ClassName)",
        text: "删除元素指定样式名。",
        tebel: [
            {
                name: "ClassName",
                value: "接受一个样式名。"
            }
        ]
    },
    {
        title: "Element - addClass()",
        mathod: "addClass()",
        alt: "为元素添加指定样式名。",
        grammar: "Element.addClass(ClassName)",
        text: "为元素添加指定样式名。",
        tebel: [
            {
                name: "ClassName",
                value: "接受一个样式名。"
            }
        ]
    },
    {
        title: "Element - toggleClass()",
        mathod: "toggleClass()",
        alt: "切换元素样式。",
        grammar: "Element.toggleClass(ClassName)",
        text: "切换元素样式。有该样式则删除，没有则添加。",
        tebel: [
            {
                name: "ClassName",
                value: "接受一个样式名。"
            }
        ]
    },
    {
        title: "Element - IsIndex()",
        mathod: "IsIndex()",
        alt: "返回元素在当前Dom层中的位置。",
        grammar: "Element.IsIndex(boolean)",
        text: "返回元素在当前Dom层中的位置(从0开始)。",
        tebel: [
            {
                name: "boolean",
                value: "传true会算上文本节点，如果不想的话请不传或传false。"
            }
        ]
    },
    {
        title: "Element - siblings()",
        mathod: "siblings()",
        alt: "返回当前节点的所有兄弟节点。数组形式。",
        grammar: "Element.siblings(type)",
        text: "返回当前节点的所有兄弟节点。数组形式。不会包括文本节点",
        tebel: [
            {
                name: "type",
                value: "只支持按class名或标签名对返回的兄弟节点进行筛选，格式('div') || ('.box')"
            }
        ]
    },
    {
        title: "Element - nextAll()",
        mathod: "nextAll()",
        alt: "返回当前节点下面的所有节点。数组形式。",
        grammar: "Element.nextAll(type)",
        text: "不会包括文本节点",
        tebel: [
            {
                name: "type",
                value: "只支持按class名或标签名对返回的兄弟节点进行筛选，格式('div') || ('.box')"
            }
        ]
    },
    {
        title: "Element - prevAll()",
        mathod: "prevAll()",
        alt: "返回当前节点上面的所有节点。数组形式。",
        grammar: "Element.prevAll(type)",
        text: "不会包括文本节点",
        tebel: [
            {
                name: "type",
                value: "只支持按class名或标签名对返回的兄弟节点进行筛选，格式('div') || ('.box')"
            }
        ]
    },
    //Element部分结束----------------------------------------------------
    //String部分开始----------------------------------------------------
    {
        title: "String - toElement()",
        mathod: "toElement()",
        alt: "将一串字符转换为Dom元素对象。",
        grammar: "String.toElement()",
        text: "将一串字符转换为Dom元素对象，以便于进行appendChild()等字符串形式节点不能进行的操作",
        tebel: [
            {
                name: "String",
                value: "<xmp class='xmp'>必须是像这样的字符串'<div><p></p></div></div><div>'</xmp>"
            },
            {
                name: "关于返回值",
                value: "<xmp class='xmp'>会是一个数组，比如这个'<div></div>'返回[div];'<div></div><p></p>'返回[div,p]</xmp>"
            }
        ]
    },
    {
        title: "String - Division()",
        mathod: "Division()",
        alt: "可以将一些格式的字符串转换为Number与String分开的数组。",
        grammar: "String.Division()",
        text: "一般适用于处理带有数字和其单位的字符串，将值和数组分开，局限性很大",
        tebel: [
            {
                name: "举个栗子",
                value: "'12px'=>[12,'px']， '-12rem'=>[-12,'rem']。"
            }
        ]
    },
    //String部分结束----------------------------------------------------
    //Window部分开始----------------------------------------------------
    {
        title: "Window - setCookie()",
        mathod: "setCookie()",
        alt: "可以方便的设置cookie，亦可以覆盖原有值。",
        grammar: "setCookie(name, value, date)",
        text: "对象形式设置时间不一定每个值都要写，如果0年的话Year就不要写了，默认会是0的。",
        tebel: [
            {
                name: "name",
                value: "设置cookie的名字，String类型。"
            },
            {
                name: "value",
                value: "设置cookie的值。"
            },
            {
                name: "date",
                value: "设置cookie的时间，栗子：setCookie('page', '12', 7)这个cookie会保存7天。"
            },
            {
                name: "还有栗子",
                value: "setCookie('page', '12', {Year:1,Month:4,Date:5,Hours:9,Minutes:1,Seconds:30})保存1年4个月5天9小时1分钟30秒。"
            }
        ]
    },
    {
        title: "Window - getCookie()",
        mathod: "getCookie()",
        alt: "可以方便的获取cookie的值。",
        grammar: "getCookie(name)",
        text: "可以方便的获取cookie的值。",
        tebel: [
            {
                name: "name",
                value: "cookie的名字，String类型。"
            }
        ]
    },
    {
        title: "Window - delCookie()",
        mathod: "delCookie()",
        alt: "用于删除cookie。",
        grammar: "delCookie(name)",
        text: "方便的删除cookie。",
        tebel: [
            {
                name: "name",
                value: "cookie的名字，String类型。"
            }
        ]
    },
    {
        title: "Window - IsReform()",
        mathod: "IsReform()",
        alt: "还是看下面说明吧，返回值是个数组。",
        grammar: "IsReform(N, limit)",
        text: "看上面说明就理解了。",
        tebel: [
            {
                name: "N",
                value: "当前值，Number类型。"
            },
            {
                name: "limit",
                value: "上限值，Number类型。"
            },
            {
                name: "说明",
                value: "IsReform(70,30)=>[10,2];  IsReform(84,15)=>[9,5];  IsReform(30,10)=>[0,3]"
            },
            {
                name: "说明",
                value: "简单解释就是N满limit；返回值[1]就会进一位，然后N就会减去一个limit，直到N小于limit,返回值[0]等于当前的N"
            }
        ]
    },
    //Window部分结束----------------------------------------------------
    //NodeList部分开始----------------------------------------------------
    {
        title: "NodeList - GoArray()",
        mathod: "GoArray()",
        alt: "把NodeList转换为数组然后返回。",
        grammar: "NodeList.GoArray()",
        text: "和HTMLCollection的GoArray一样。",
        tebel: [
            {
                name: "无参数！",
                value: "不用传参！"
            }
        ]
    }
    //NodeList部分结束----------------------------------------------------
];

let AB_FC = function Added_Body_Fill_Controller() {
    return {
        Template: ClassNode("FillTemplate")[0],
        body: ClassNode("BodyTemplate")[0],
        tabel: function () {
            let c = ClassNode("TabelTemplate")[0].cloneNode(true);
            ClassNode("BodyTemplate")[0].removeChild(ClassNode("TabelTemplate")[0]);
            return c
        }(),
        init: function () {
            this.Template.repeat(detailsData);
            this.body = ClassNode("BodyTemplate");
            this.body.GoArray().forEach(function (v) {
                v.appendChild(this.tabel.cloneNode(true));
            }.bind(this));
            this.tabel = ClassNode("TabelTemplate").GoArray();
            detailsData.forEach(function (v, key) {
                this.tabel[key].repeat(v.tebel);
            }.bind(this));
        }
    }
}();
AB_FC.init();
let Top_NC = function Top_Navigation_Controller() {
    return {
        animate: function (type, style, text) {
            this.setAttribute("slide", type);
            Win.Top_Controller.onclick = undefined;
            [ClassNode("Top_Navigation")[0], this, ClassNode("Added_Body")[0]].AllAnimate([{top: style.Top}, {left: 12 + "rem"}, {marginTop: style.MTop}], 300, function () {
                this.children[0].innerText = text;
                this.animate({left: 11.8 + "rem", color: style.col}, 300, function () {
                    Win.Top_Controller.onclick = Top_NC.slide
                })
            }.bind(this))
        }, hide: function () {
            Top_NC.animate.bind(this)("show", {Top: -.4 + "rem", MTop: 0, col: "#24292E"}, "+")
        }, show: function () {
            Top_NC.animate.bind(this)("hide", {Top: 0, MTop: .4 + "rem", col: "white"}, "-")
        }, slide: function () {
            Top_NC[this.getAttribute("slide")].bind(this)()
        }
    }
}();
Win.Top_Controller.onclick = Top_NC.slide;
let AB_SC = function Added_Body_Scroll_Controller() {
    return {
        Max: ClassNode("Added_Body_List_Max")[0],
        list: ClassNode("Added_Body_List")[0],
        fill: IdNode("Added_Body_Fill"),
        init: function () {
            this.listTop = 0;
            this.Max.IsScroll(function () {
                this.listTop -= 30;
                if (this.listTop <= 0) {
                    this.listTop = 0
                }
                this.list.style.marginTop = -this.listTop + "px"
            }.bind(this), function () {
                let min = this.list.offsetHeight, max = this.Max.offsetHeight,
                    block = 0.4 * TarNode("html")[0].style.fontSize.Division()[0];
                this.listTop += 30;
                if (this.listTop < min - max + (block * 2)) {
                    if (this.listTop <= 0) {
                        this.listTop = 0
                    }
                    this.list.style.marginTop = -this.listTop + "px"
                } else {
                    this.listTop = min - max + (block * 2)
                }
            }.bind(this))
        }
    }
}();
AB_SC.init();
let AB_LC = function Added_Body_List_Controller() {
    return {
        title: ClassNode("Added_Body_List")[0].children.IsScreen(".title"),
        list: ClassNode("Added_Body_List")[0].children.IsScreen(".list"),
        Sign: [0, 0],
        details: IdNode("Added_Body_Fill").children.IsScreen(".details"),
        init: function () {
            this.details.AllIsStyle({opacity: 0, zIndex: 1});
            this.li = this.list.Allchildren("li");
            this.li.forEach(function (v) {
                v.onmouseover = function () {
                    this.addClass("ohli");
                };
                v.onmouseout = function () {
                    this.removeClass("ohli")
                };
            });

            this.li.AllIsStyle({display: "none", opacity: 0, right: 2 + "rem"});
            this.li[0].getStyle("right");
            if (getCookie("page")) {
                this.Sign[0] = Number(getCookie("page").split(",")[0]);
                this.Sign[1] = Number(getCookie("page").split(",")[1]);
            }
            this.slideDown(this.Sign[0]);
            this.Open(this.Sign[1], this.Sign[1]);
            this.title.Allclick(function () {
                if (AB_LC.title.IsIndex(this)[0] !== AB_LC.Sign[0]) {
                    AB_LC.slideUp(AB_LC.Sign[0]);
                    AB_LC.Sign[0] = AB_LC.title.IsIndex(this)[0];
                    AB_LC.slideDown(AB_LC.Sign[0])
                }
            });
            this.li.Allclick(function () {
                if (AB_LC.Sign[1] !== AB_LC.li.IsIndex(this)[0]) {
                    AB_LC.Out(AB_LC.Sign[1], function () {
                        let m = AB_LC.Sign[1];
                        let n = AB_LC.Sign[1] = AB_LC.li.IsIndex(this)[0];
                        AB_LC.Open(n, m)
                    }.bind(this))
                }
            })
        },
        slideUp: function (n) {
            this.list[n].childNodes.GoArray().IsScreen("li").AllIsStyle({display: "none", opacity: 0, right: 2 + "rem"})
        },
        slideDown: function (n) {
            this.title[n].siblings(".title").AllremoveClass("ok");
            this.title[n].addClass("ok");
            let li = this.list[n].childNodes.GoArray().IsScreen("li"), s = 0;
            li.AllIsStyle({display: "block"});
            let liTime = setInterval(function () {
                li[s].animate({opacity: 1, right: 0}, 100);
                s++;
                if (s === li.length) {
                    clearInterval(liTime);
                    liTime = null
                }
            }, 50)
        },
        Open: function (n, m) {
            setCookie("page", this.Sign, 7);
            this.li[n].addClass("okli");
            this.details[n] ? this.details[n].IsStyle({opacity: 1, zIndex: 3}) : null
        },
        Out: function (n, cb) {
            this.li[n].removeClass("okli");
            this.details[n] ? this.details[n].IsStyle({opacity: 0, zIndex: 1}) : null;
            cb ? cb() : null
        }
    }
}();
AB_LC.init();



















































