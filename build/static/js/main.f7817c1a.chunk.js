(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},18:function(e,t,n){},237:function(e,t,n){},247:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(19),o=n.n(i),l=n(11),s=n(2),c=n(3),p=n(5),d=n(4),u=n(6),m=(n(48),n(28)),g=n.n(m);function h(e){return r.a.createElement("div",{style:{margin:"10% 10%"}},e.children)}function f(e){return r.a.createElement("p",{style:{textAlign:"left",fontWeight:"bold",lineHeight:"190%",margin:"0 20%",marginBottom:"5%"}},e.text)}n(18);var y=function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{onClick:function(){e.props.onChange()}},r.a.createElement("div",null,r.a.createElement("div",{className:"menu-btn-child slide-enter-left"}),r.a.createElement("div",{className:"menu-btn-child slide-enter-left"}),r.a.createElement("div",{className:"menu-btn-child slide-enter-left"})))}}]),t}(r.a.Component);function v(e){return r.a.createElement("a",{className:"menu-links",href:e.link},e.name)}var S=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(p.a)(this,Object(d.a)(t).call(this,e))).handleMenuClick=function(){n.setState({closed:!n.state.closed,firstRender:!1})},n.state={closed:!0,firstRender:!0},n.handleMenuClick=n.handleMenuClick.bind(Object(l.a)(n)),n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"menu-cnt"},r.a.createElement(y,{onChange:this.handleMenuClick}),this.state.closed?[!this.state.firstRender&&r.a.createElement("div",{className:"menu-elements-cnt down"},this.props.names.map(function(t,n){return r.a.createElement(v,{key:n,name:t,link:e.props.links[n]})}))]:r.a.createElement("div",{className:"menu-elements-cnt up"},this.props.names.map(function(t,n){return r.a.createElement(v,{key:n,name:t,link:e.props.links[n]})})))}}]),t}(r.a.Component);function C(e){return r.a.createElement("div",{className:"header-cnt space-left"},r.a.createElement(S,{names:["~ /","Blog","Projects","UX-Gallary","Contact"],links:["/","/Blog","/projects","/UX","/#info-cnt"]}),r.a.createElement("h1",{className:"header-name"},e.name),r.a.createElement("p",{className:"header-sub"},e.subtitle))}function E(e){var t="image";return e.ani&&(t="image "+e.ani),r.a.createElement("div",{className:t},r.a.createElement("img",{className:e.position,src:e.src,width:e.width,height:e.height,alt:e.alt}),e.subtitle&&r.a.createElement("h6",{className:"image-subtitle"},e.subtitle))}function A(e){return r.a.createElement("div",{className:"code-cnt "+e.position},r.a.createElement(g.a,{className:"code",language:e.language},e.code))}var b=n(29),x=n.n(b),w=n(30),N=n.n(w),O=(n(15),function(){function e(t){Object(s.a)(this,e),this.size=10,this.x=t.x,this.y=t.y,this.target={x:500*Math.random(t.width),y:500*Math.random(t.height)}}return Object(c.a)(e,[{key:"draw",value:function(e){e.beginPath(),e.arc(this.x,this.y,this.size,0,2*Math.PI,!1),e.strokeStyle="black",e.stroke()}},{key:"update",value:function(e){this.target.x>this.x?this.x+=5:this.y-=5,this.target.y>this.x?this.y+=5:this.y-=5}}]),e}()),k=(r.a.Component,n(237),n(31)),D=n.n(k);function I(e){var t,n={backgroundColor:(t=e.tech,"swift"===t?"#ff9500":"obj-c"===t?"#2196f3":"open-source"===t?"#ffca28":"cocoa-script"===t?"#2196f3":"IOS"===t?"#2196f3":"#212121"),borderRadius:"15px",padding:"8px",marginRight:"10px"};return r.a.createElement("h4",{style:n},e.tech)}var j=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(p.a)(this,Object(d.a)(t).call(this,e))).handleHover=function(e){n.setState({hovered:!n.state.hovered})},n.state={hovered:!1},n.handleHover=n.handleHover.bind(Object(l.a)(n)),n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{onMouseEnter:function(t){e.handleHover(t)},onMouseLeave:function(t){e.handleHover(t)},onClick:function(){e.refs.link.click()},className:"project-cnt"},r.a.createElement("div",{style:{display:"inline-block"},className:"flexColumn"},r.a.createElement("a",{ref:"link",href:this.props.link,className:"hiddenLink"},"a"),r.a.createElement("h1",{className:"flexColumnElem"},this.props.name),this.state.hovered&&r.a.createElement("div",{id:"viewProject-cnt",className:"growRight"},r.a.createElement("h5",{id:"viewProject-text",className:"slideRight"},"View Project")),r.a.createElement("div",null,r.a.createElement("p",{id:"project-discription",className:"flexColumnElem"},this.props.disc,r.a.createElement("label",{id:"project-date"},this.props.date)),r.a.createElement("div",{className:"flexRow"},this.props.tech))))}}]),t}(r.a.Component),K=function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"content-cnt"},r.a.createElement(C,{name:"Projects",subtitle:"Below are some of my featured projects that i've been working on."}),r.a.createElement(G,{link:"https://www.github.com/JoeManto",target:"_blank",text:"View Profile"}),r.a.createElement("div",{className:"projectsList-cnt slideRight"},r.a.createElement(j,{name:"Sheetie",link:"/projects/sheetie",backgroundColor:"blue",date:"2016",disc:"Sheetie is a sketch 3 plugin developed for indie game developers in mind. Sheetie creates vectorized sprite sheets objects that are automatically placed and rendered into a sketch art-board",tech:[r.a.createElement(I,{tech:"cocoa-script"}),r.a.createElement(I,{tech:"open-source"})]}),r.a.createElement(j,{name:"One Palette",link:"projects/onepalette",backgroundColor:"blue",date:"2019",disc:"OnePalette is a modern material design color palette that allows for quick and intuitive color lookups. OnePalette was designed and implemented for frontend devs and UX designs in mind, Letting developers stay on track and keep creating.",tech:[r.a.createElement(I,{tech:"swift"}),r.a.createElement(I,{tech:"open-source"})]}),r.a.createElement(j,{name:"Haptic",link:"projects/haptic",backgroundColor:"blue",date:"2019",disc:"Haptic is an IOS keyboard extension that provides 'haptic feedback'. Haptic is in the App Store as 'Haptic Feedback Keyboard'",tech:[r.a.createElement(I,{tech:"swift"}),r.a.createElement(I,{tech:"IOS"})]})))}}]),t}(r.a.Component);function G(e){return r.a.createElement("div",{className:"space-left flexRow"},r.a.createElement("img",{width:"25px",height:"25px",className:"flexRowElement",src:D.a,alt:"github logo"}),r.a.createElement("a",{href:e.link,style:{margin:"auto 0",color:"#212121",marginLeft:"10px",textDecoration:"none"}},e.text))}function P(e){return r.a.createElement("div",{onClick:function(){document.getElementById("bouncingArrows").click()},className:"arrow-down bounce"},r.a.createElement("a",{id:"bouncingArrows",style:{display:"none"},href:"#info-cnt"},"s"))}var M=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(p.a)(this,Object(d.a)(t).call(this,e))).handleProfileImageChange=function(){n.setState({profileImg:!n.state.profileImg})},n.state={profileImg:!1},n.handleProfileImageChange=n.handleProfileImageChange.bind(Object(l.a)(n)),n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"landing-header-cnt flexRow"},r.a.createElement("div",{onMouseEnter:this.handleProfileImageChange,onMouseLeave:this.handleProfileImageChange,className:"landing-header-image-cnt"},this.state.profileImg?r.a.createElement("img",{src:this.props.imagesrc,className:"profile-image roundedImage",alt:"profile-pic"}):r.a.createElement("img",{src:this.props.imagesrc2,className:"profile-image roundedImage",alt:"profile-pic"})),r.a.createElement("div",{className:"flexColumn"},r.a.createElement("h1",null,"Joseph Manto"),r.a.createElement("h3",null,"Software Engineer ",this.props.company)),r.a.createElement("p",{id:"background-text landing-text",style:{marginTop:"100px"},className:"content-text"},"Currently, I am a senior at Western Michigan University studying Computer Science and expecting to graduate in May 2020. My current interests in computer science are Machine Learning, Python, and Javascript frontend development. The roots of my programming experience are as an IOS and MacOS developer, but I enjoy writing back-end services, and c code just as must as I like frontend development."))}}]),t}(r.a.Component),H=(r.a.Component,r.a.Component,n(32)),T=n.n(H),W=(r.a.Component,'\nfunction makeGrid(size){\n\n   var rect;\n   var shapeGroup;\n   var fill;\n   var group = [[NSMutableArray alloc] init];\n\n   for(var i = 1;i*size <= width;i++){\n        rect = MSRectangleShape.alloc().init();\n        rect.frame = MSRect.rectWithRect(NSMakeRect(i*size, 0, 1, height));\n        \n        shapeGroup = MSShapeGroup.shapeWithPath(rect);\n        shapeGroup.style().addStylePartOfType(0)\n        \n        fill = shapeGroup.style().fills().firstObject();\n        fill.color = MSColor.colorWithRed_green_blue_alpha(181/255,9/255,255/255,1.0)\n        \n        [group addObject:shapeGroup];\n   }\n   \n   for(var i = 1;i*size <= height;i++){\n        rect = MSRectangleShape.alloc().init();\n        rect.frame = MSRect.rectWithRect(NSMakeRect(0, i*size, width, 1));\n        \n        shapeGroup = MSShapeGroup.shapeWithPath(rect);\n        shapeGroup.style().addStylePartOfType(0);\n        \n        fill = shapeGroup.style().fills().firstObject();\n        fill.color = MSColor.colorWithRed_green_blue_alpha(181/255,9/255,255/255,1.0)\n        \n        [group addObject:shapeGroup];\n   }\n  var layer = MSLayerGroup.alloc().init();\n  [layer addLayers:group];\n  [layer setIsLocked:true];\n  [layer setName:@"Contents"]\n  artboard.addLayers([layer]);\n};'),Q=n(33),R=n.n(Q),U=n(34),L=n.n(U),B=n(35),J=n.n(B),V=n(36),F=n.n(V),q=(r.a.Component,'\n//\n//  Palette.swift\n//  OnePalette\n//\n//  Created by Joe Manto on 3/6/18.\n//  Copyright \xa9 2018 Joe Manto. All rights reserved.\n//\nimport Cocoa\nimport CoreData\n\nclass Palette: NSManagedObject {\n    \n    @NSManaged var paletteDataToSave:NSData?\n    var paletteData: [String:OPColorGroup]?\n    @NSManaged var paletteName:String\n    @NSManaged var paletteWeights:[Int]?\n    @NSManaged var paletteKey:[String]?\n    @NSManaged var curGroupIndex:Int\n    \n    override init(entity: NSEntityDescription, insertInto context: NSManagedObjectContext?) {\n        super.init(entity: entity, insertInto: context)\n    }\n    \n    init(name:String,entity: NSEntityDescription, insertInto context: NSManagedObjectContext?) {\n        super.init(entity: entity, insertInto: context)\n        self.paletteData = NSDictionary.init() as? [String : OPColorGroup]\n        self.paletteName = name\n        self.paletteWeights = Array(repeating: 0, count: 10)\n        self.paletteKey = Array(repeating: "", count: 0)\n        self.curGroupIndex = 0\n    }\n   \n     init(name:String,data:[String:OPColorGroup],palWeights:[Int],palKeys:[String],entity: NSEntityDescription, insertInto context: NSManagedObjectContext?) {\n        super.init(entity: entity, insertInto: context)\n        self.paletteData = data\n        self.paletteName = name\n        self.paletteWeights = palWeights\n        self.paletteKey = palKeys\n        self.curGroupIndex = 0\n    }\n    \n    /*inits a palette object from an import from a local json file that contains palette data\n     This method is used when the user first runs the application so it can intital install\n     pre installed palettes*/\n    convenience init(name:String,localFile:String,entity: NSEntityDescription, insertInto context: NSManagedObjectContext?){\n        self.init(name: name, entity: entity, insertInto: context)\n        let path = Bundle.main.url(forResource: localFile, withExtension: "json")\n        let content = try? String(contentsOf: path!)\n        \n        let jsonWithObjectRoot = content!\n        let data = jsonWithObjectRoot.data(using:.utf8)!\n        do {\n            let json = try JSONSerialization.jsonObject(with:data)\n            if let dictionary = json as? [String: Any] {\n                if let nestDictionary = dictionary["keys"] as? [String: Any]\n                {\n                    let keys:NSArray = nestDictionary["values"] as! NSArray\n                    self.paletteKey = Array(repeating: "", count: keys.count)\n                    for (index, i) in keys.enumerated(){\n                        let stringVal:String = i as! String\n                        self.paletteKey![index] = stringVal\n                        //print(self.paletteKey[index])\n                    }\n                }\n\n                \n                if let nestDictionary = dictionary["weights"] as? [String: Any]\n                {\n                    let weights:NSArray = nestDictionary["values"] as! NSArray\n                    for (index, i) in weights.enumerated(){\n                        let stringVal:String = i as! String\n                        self.paletteWeights![index] = Int(stringVal)!\n                        //print(self.paletteWeights[index])\n                    }\n                }\n                for  palKey in self.paletteKey!{\n                    if let nestDictionary = dictionary[palKey] as? [String: Any]\n                    {\n                        let colorGroup:NSArray = nestDictionary["values"] as! NSArray\n                        self.paletteData![palKey] = OPColorGroup.init(id: palKey)\n                        for (index, i) in colorGroup.enumerated(){\n                            self.paletteData![palKey]?.addColor(color: OPColor.init(hexString: i as! String, alpha: 1.0, weight: self.paletteWeights![index]))\n                        }\n                        self.paletteData![palKey]?.findHeaderColor()\n                        \n                       // print(self.paletteData![palKey]?.getColorArray().count as Any ," ",self.paletteData![palKey]?.getName() as Any)\n                    }\n                }\n                \n                if let nestDictionary = dictionary["Names"] as? [String:Any]{\n                    let names:NSArray = nestDictionary["values"] as! NSArray\n                    for (index, i) in (self.paletteKey?.enumerated())!{\n                        self.paletteData?[i]?.setName(name: names[index] as! String)\n                    }\n                }\n                \n            }\n        } catch {\n            print("Error parsing Json")\n        }\n    }\n    \n    //----------------Group Methodds-------------------------\n    /*adds a colorgroup to the palatte data*/\n    func addColorGroup(group:OPColorGroup) {\n        paletteData![group.getIdentifier()] = group\n        //print(paletteData![group.getName().lowercased()])\n        //print(paletteData)\n        print("added colorGroup")\n    }\n    \n    /*Adds an empty color group to the palette data with a name*/\n    func addEmptyGroup(with groupID:String) {\n        print("added empty group")\n        paletteData![groupID] = OPColorGroup(id: groupID)\n    }\n    /*updates an existing color group value*/\n    func updateColorGroup(group:OPColorGroup, for groupID:String){\n        paletteData![groupID] = group\n    }\n    \n    /*generates a simple color group used for when the user inserts a new color group in to a palette*/\n    func generateTempColorGroup() -> OPColorGroup {\n        let randomId = OPUtil.genIdOfLength(len: 10) as String\n        let group = OPColorGroup(id:randomId)\n        let random = arc4random_uniform(201) + 30\n        let color:OPColor = OPColor(hexString: String(format:"%2X%2X%2X",random,random,random), weight: 50)\n        group.addColor(color: color)\n        paletteKey?.append(randomId)\n        group.headerColorIndex = 0\n        group.setHeaderColor(header: color)\n        self.addColorGroup(group: group)\n        return group\n    }\n    \n    //------------------CoreData Save------------------------\n    /*Turns paletteData to BinaryData so it can be saved as an NSManaged objec in core data*/\n    func saveColorData(){\n        self.paletteDataToSave = NSKeyedArchiver.archivedData(withRootObject: self.paletteData!) as NSData\n    }\n    /*Core data saves the manangedObjectContext to the entitity*/\n    func save() ->  Bool{\n        saveColorData()\n        \n        if (managedObjectContext?.hasChanges)!{\n            do{\n                try managedObjectContext?.save()\n                print("saved palette")\n                return true\n            }catch{\n                print("failed to save")\n                return false\n            }\n        }\n        return false\n    }\n}'),X=n(37),Z=n.n(X),Y=n(38),z=n.n(Y),_=(r.a.Component,n(246),n(41)),$=n(14),ee=n(40),te=n.n(ee);n.d(t,"host",function(){return ae});var ne=te()({basename:""}),ae=function(){return""};var re=document.getElementById("root");o.a.render(r.a.createElement(function e(){return r.a.createElement("div",{className:"App"},r.a.createElement(_.a,{history:ne,basename:""},r.a.createElement($.c,null,r.a.createElement($.a,{exact:!0,path:"/",component:e}),r.a.createElement($.a,{path:"/projects",component:K}),r.a.createElement($.a,{component:function(){return r.a.createElement("div",null,"404 Not found ")}}))))},null),re)},29:function(e,t,n){e.exports=n.p+"static/media/profilepic2.4e97d78c.png"},30:function(e,t,n){e.exports=n.p+"static/media/profilepic.ce269237.png"},31:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKUAAAClCAYAAAA9Kz3aAAAfJUlEQVR4Xu1dCXgUVbY+lYbO1qGT0JUWRAxD2JUEByI8E0neiA6IgAvoDHFlUxiQ5UlEHxpkRmFURHwiIIwwEBfUgUFNeIAsJkERnhgQDXuAGNJdTXYSsnTqfafSFTuhl6ruqlvVSd3vy4d233vOuef+fbdz7jkUaMWtBo4fP967qKgotri4OPYKw9x4/sIF04Xz5yMvl5QYT/3yS+TVurpIAOD/ugBAJQCU83/mmJjym3v2LI+Nja24uVcvW58+fYoMISGFN/XqVZicnHxOU71rDVAdXTEsy4YdO3bszsLCwuG5ubl9Cs+fjz1+7FhswalT3dvqRg8AnUNCQB8cDDqdjvtzV+x2O/cV/ltXWws19fXXVQ3T6y8NGTq0MLZXr8IhQ4acv+222w72798/p3v37jUdeVw6HChZlg3Jy8sbcejQodR/ff55at7Bg4kAgHjjSrgDdHp9y0ey4QMB6wK0iN5D06ZM2XdnSsq+pKSk73r16nVNNiFUSLjdg5JlWf3ly5cT9339der2HTtS9+zaNaKsoiIEx8JoMEBIaKjqhgWBWllaCo659dpt8fHf3jly5L7x99+/LyUl5TuKohpVJ7SEArVbUF64cCFq586dD761YkVawcmTdwIAFabXQ5jB4HHZlVC3kpGqr6+HsooKpMcCwDdTn3pq84QHHvjX2LFjyyRjoiJC7QqUOCtu3br1vk0bN6ZlZWePwWU5ymgEEksxyTEtYxicRetNUVFZaY8/vnnatGlfDho06PpNK0mhJOTVLkB54sSJpI0bN6a9/vrrkwAgCveFhogICdWkTlJNdjswpaUoXOkNJtPWN1au3JKWlpanTmmFSxXQoNy7d2+/NatXp2/97LM0PBibaVp4z9tZTccS3xAeErL5+Rdf/OvixYvPB2oXAxKUX3311dAF8+YtKjh1akKYXh8UYTQGqv4llxsPSbbSUryP+vgv06cv/591645LzkRmggEFyuzs7D8sXbp00cGDB//QHveKUo+1hWGQ5Fdz5sxZtmrVqlyp6ctFLyBAeeTIkW4zn3569fdHjkxQ6zWOXAMkBV0HOLe/8MILM1999dXLUtCUk4aqQcmybNC0adNmrF+//jWjwWBU452inIMjNW0Lw+C9UnpGRsb7GRkZTVLTl4qeakG5du3aW2fMmPEPPcDQqA58gJFqoHk6jj3nkR49ejxVVFSkyv2m6kCZn58f/sRjj/330fz8BWaa7iz1oGj0mjVQX1/fUFZR8cbs2bOXvPPOO3Vq0ouqQJmenj5o+fLlnxgNhkHaUk0GJhaGOQEADwMA/quKohpQ3j506PRDR46sNNO0+ozRqhgq+YSw2+21ttLSZwHgffm4CKesOCjfffddw6xZszYbDYYJ2uwofODkqGlhmO00TT/KMEy1HPSF0lQUlFOnTv39+vXrPzHTdG+hAmv15NXAtdrasxXV1bic/5+8nNxTVwSULMtSPXv2nHfp0qVl2mFGqaF3z9dutzfYSkvTAeAtJaQjDsqtW7fqJk2atM5oMDylLddKDLlwnhaGeT8lJWXm/v37ifpvEgXlqlWrgufMmbPNFB092tNTAuFq02rKrQELw3wZFxf30JkzZ4hdGxED5bJly4zPP//8v800PVJuRWr0pdXAtdrafRXV1Q84HsRJS9wFNSKgnDp1ao/169fvNNP0INl7pDGQRQP19fXHyyoq7gIAqywMnIjKDsrp06f3Xrdu3X4zTfeQuzMafXk10NTYeIYpKxsNAGfk5CQrKMeMGTM0Kysry0xrxms5B5EkbbvdbrWVluKMKZvdXDZQPvLII90//vjjHDNN/46k0jReRDRw1sIw+BivWA5usoBy3LhxETt27PhW20PKMWSqofmThWH+AwCqpJZIclBmZGSEZGRkZJtpOkVqYTV66tKA3W7faystvRcAJA2WICkoMzIygjIyMvDaZ6y61KdJI5cG7I2NO2xlZfcDgGROw5KCEgDeM9P003IpQKOrTg3U1da+W15d/ReppJMSlHPNNK2IrVQqZWh0fNdAZWXlvNq6upW+U/itpVSgHGaKjs7T6XSap7gUoxKINCiq3mK1JgPA9/6K7zcoExISIk8XFBw1RETE+iuM1j7gNVBoYZgh/poj/QYlAGw30/R4qdVZXVUFV6+1PtRhgKrg0NB2FxtIat0508OHYg319VBRfb3frhwRRZrs9m1MaSnayX0u/oJSln0kAnJkaio88cQTXKi+qspKKCoqguPHj8OJn36Co/n5XIe1N+Cux90pxhBXYdRdd8GgQYNgwMCBEBUZyen08uXLMGPGDJADmHUNDfPKy8t93l/6A0rZ9pH4eD4/Px8GDx58ndYbGhrg4sWLcOi772DNmjWQk9sc+EGLmAFQVVHREjF47rPPwoT774eBAweCOyvvvLlzYeXbb0sPTD/3lz6BMiUlJfL7gwePRhiNku8jr9XWwuCEBPgmJ0fQ9M8wDGzbtg3WrF7NzaAdcfZ0RMCAiQ89BE8+9RSMHo0+E97LkcOHYVhiovSgbGaN+0v0ChMdKtsnUAIAvjrE12+SF1Tw8mXLYGE6euMLLziD7tmzB15ctIgDZ0cIB8iDEWfFmbNmQZ8+fYQrDLMGVFbCrYMGQU1NjSyBZJuampYzV648L0oojG4rtgEA9DNFR5/QyeQ67mnpFirrgQMH4G9//Svs3rOnXS7rjqCpsHjxYpg9e7bb5VmIvmRbwpuZ15UxTEI9QIEQWfg6okEZ2rnz3i6RkalimIipi6BkWYyi7H/Jzs6GJx9/HJCmKTrap9kADw2NdjvU19VBw7VrfBxyUcJhSP9Oej101ushSKeDTjod96/YglsbPEWnTZ4MGUuWQO/e/j8C/eKLL2DcuHFyLeEALPu1xWZDVzfBRSwoHzHT9EeCqYusiEpPHD4cdu3eLbKl5+rr1q3jTpoIDk9xiZxii7cQxD1qv/794ebYWDAajRAZFQXdunUDg8HAnWQxYnBYWFgrAXBZxBuD6qtXoeTyZSgpKYGqqiqwWCxw6eJFKDh1qlV9vOoKNxg8AhV/WMlJSbBixQoYOmyYZPo5e/YsxMXFyQdKTNvS2PgnW1nZx0KFFgzKfiZThLWh4YRer79JKHGx9XzdTwrhgweiWTNnwqeffcYt6ViuVlS0mvn69+0L48aPh/j4eLixRw/o27cvhIaGQnh4OHTuLI2xCgFbV1cH5eXlUFBQwF3N7Nm9m5PLueCeODQsrCVLxNq1a2H69OlCuiq6DkVRsoISAC45Dj2C3NwEg1LOww2vRQTl1k8+gYmTMHS5PAX3m+PHjgVjZCTcfc89kJqaCrfceqvL6yd5JHBPFX84p06ehLy8PEA5s7KzuRP1uvffh8hITGwmT7l92DA4ffq03EaJ5RaGEXToEQrKfmaaxgBI4jdCIvSIoDz8/feSLk+u2ONshaVLF8xcp96CICXxkmTmM8/AhjVrPG5tJNCS4EOPUFDKYkps21EEZXFxMbdn0wo5DeA+dcGCBXIv4Xjo+bfFZpvgrWdCQNnXTNN4pBdS1xs/j98jKK1WK5HZwS9B21lj/iAoh8mxjarYmsrKAVV1dSc9qdAr0PQAG6No+nG5x4FP/WYpK5N1/yR3PwKR/oeZmTA5LU3+mRKVQ1FrLVarR0dwb6DsbqbpC3jNJreyNVDKrWH39ImCEqC2sbq6z5Xa2l/dSeQNlLKZE9sKxHu2aMs3eXD+Y8MGmDJ1KpmZsrl7Hk/inkAZZYqO/lWn0xGLrKvtKckDEjkS3FPyHSyzMAyao1wmPPUEygwzTb9MUk0Iyp9//hkGDBhAkm2H5/XSSy/B0qVLSc6UqPNFFoZZ5kr57kBJmaKjS3Q6XQzJEUNQZmVlCXa9Iilbe+Z196hR8P1335HOfW6xMAze/V3n6OAOlClmmt5HeiAQlG+++SbMnz+fNOsOzY+AmdGlfimWTS2x2fa3/dIlKMNDQjYaIiJkvwZqKww+gxgzdixs/fTTDg0Skp1H23v37t1JL91cF1mATVaGeUIIKA1mmsb8fQaSyuF5Sem6poT8gcZTdtc1zwqpsjBMVwBocK7maqaU1T3N26AhKHNzcuCOpCRvVbXvJdDAtKlT4Z8bNsht93YrKUtR91ut1u0eQWmKitqu69RJ8iezQvWHoET3/rdW+vwYTiirDl8P3eeioqJ8doCWRIEu7OFtZ8oYM00XAYA0zoMipeadbLULdJGK86M6YWuOK0kb2Jqam6xXr1r4L9uCUpZ33EJ05siuqt1TClGWxHUUuqds6QVLUc9YrdY1LkHZxWDYHhoaqsjSjct25pYt8OfJkyVWuUZOiAbwrvJgbi73vIN4abOEO8+UQeaYGHy1FU1aKAQkPobavGULadYaP4cG0KE4JiZGqf3lFQvDoKGGi3HpDMoEM00fJT1K6IhxtboaCouKND9K0spvw0/J/WVTQ8MQprz8x1agDA0OntulSxfi8SVJvMtReKwDir1iyzjLzrPYbNyVS8tMaTaZtgNFEd1P4mlbr9dDiVX2fEEBBQwlhZU5lIv7rjntK3lQKrKf1BwwlISfe973jhkDB/btI33oadlX8qAkvp/EWTI2NhZ++JHbRmhFRRpQarZsAhjCMMyPPCiJ309qV0AqQqELUe5MToZjP/5I1p3Nsa/kQNnFYFgZGhoqSxQ1d6pHUFZUVKj+7bW6oSOfdAo8kcDOvG1hmLkcKLtGR+/spNPdI18XW1PG4J73jhunuaiRUrgPfPh7SwLPblukowD+t4Rh/siB0mwyFQJF3eyD7D410a6BfFIb8UYD+vXjgnLhDQmRwrIXLDZbLIJSZ6ZpzHova0gW505pkTCIDLHfTIhFzvhNUruFYYIRlP3NNP2L3z0QSABP3RhxNvfgQckimQlkrVUTqYG83FxISk4m6pWua2oaQOkBJkTR9DaR8vpcHaPQTnn6aVj93ns+09AaktGAEvtKdPqlIsPD5waHhREzL2qPw8gASgouGEcewwQWFhaS3FfOw6e0a3Q63QwpOiGEBoJy//79MHLkSCHVtToKa2DSxImQ9eWX5Kw7FLWWuoGmd7IAxK6DSMWgVHgs2w17QrErf9MXy/6bMtM0vrslNm0hKM+cOSNJEPl2M/Iq7sgrS5bAyxkZxA47eFdJmU2m74CibielFy1eEClNS8OH+LUQyx6iYmi6gALoJ00XvFPRzIvedaSmGgoEv8rHmZK4NUezeasJdp5lIW0DZwFO4p6yBC2NpNSEM2WZFq2XlLr95qPATGlBUGJS7WC/pRdIQNtTClSUSqoR31MCVCAopck5J1CJ2ulboKJUUo306RvzOSoyU2qBUVWCOAFiPPfcc/DGG28QuxLiQUl8T0kigZMAfWtVBGhAgQBYFkWuhDQzowA0qKQKaTMjf/rGl1vxpHSAe8oN69fDU1OmkGKp8fFRA+iQkZqSAj8dO0burQ5enith0VmSkQEvvUw0xr+Pw9Kxm2EOy1sHDYLamhqf8pP7qL0DxB0y8H3OAxMnanGDfBwxks2UCD3dbPumaUwO/jCpzmKi+cEJCfBNTg4plhofHzWg0PvvTyhzTMwaYFli/pR8HErNquMjUgg2I21i5LrG+VPGxGSwLEt0g4eHnfz8fFUkfic4xgHHat7cubDy7bdJ3lECRVFLKFNU1CO6Tp0+Iqkx7QROUtu+8woPDoYwgwF0OmIPXTEn+J/wjU5CcFgY0biU2mHHd6CQaqnEozHsG8YTwie2Xcw0XUry3Tcy1/LlkIKXb3wUyq9jbwKIVCRCBg9KzdzoG2BItFLAvIhLd0uEDNzIEn2nw4Ny4XPPwfK//52EjjUeIjSAl+axPXtye0mS+8nWsYQIXwuhfjBSRteuXeHnggItUoYIwJComp2dDWPGjCF66nb067eoa6bo6Lk6nY5YQAJesdobcBIQE89DoUi+wOfT4faUSpzAkS9mrf2PpCTYtXu3eM1pLWTRgBKmRb4jbSP5BplpGqPhY0ZRogVnS83pl6jKPTJTwKmXl6fcwjCYw4lVNDsESoMBrx6bMgXeX79ePSPTQSXhZ0lTdDTRAw6nbhfZITBw6lygKOL7Su16SD2/ALwGWr9hgxIHHATl9Xl0aJpOCAIgatnhhwM9h37Xu7eWKUJBfB47dgzi4+OVAaTDkoOZIVAFrXMzKrSv5GfLtWvXwvTp0xUcmo7Jmg/5d+7sWXIe5q1V3bKfbAtKXMKJZx3jZeNd2rTgV+R/GAo8o23dSQ9ZbOEGmn6CBfiAvFqaOeIy3lmvh+KSEu1CndAgKHhR3tJDCuDJEobZyH/QKgm9yWSK0FHUrwCgQNLnZpG0NMuE0AgAp0+fhr59+yqVTpnvaHUTQDeGYapdghI/JP08wtUQIDCf0eKiy4pO/vonymgkFzradY8+sTDMI85ftZop8YuYmJgJFMsSC8zvTvMITM1hQx5cIiDvTEoCxmpV6mDT0jEMvG+1Wrd7BCUAdDbT9BUll3BeQATmxIce0jKTSYhN/urHaDAoDkgAsFoYpgcANHgDJcTQ9EYK4HEJdeEzKQTmqLvugswPPwSapn2mozUE+HTrVpj08MNK7yF/GwqKWmuxWp9uOzbXLd9Y4QaTKYWlqH1qGUh03Lh67RpkZWXB6NGj1SJWwMiB/pHPp6fDe2vWqAeQeEnOsqklNhv68rYqLkGJ9c00fZlkMFVvI8zfY06dMgXeXLFCy37rTWGO7w8cOACPpaXBxaIixaw1bkQ9Z2GYOLR6CwUlKPH0VoiecTnH8uabb8Ls2bO1+0w3Svvll1/g2TlzYPeePaCCE/Z1UuJT2hKrNcOV+O5mSjAajVEhev1ZAIgSAhbnOjxwXLULDwmRJFEQ8ujZowe8uHgxPPnkkxo4HcpGML76t7/BlsxMkErXYsdfQP3yuoaGXuXl5eWiQImVzTS9DADSBTBpqYJgwQBWEydNggEDBnCfo20VzYdHf/gBtm/fDp9+9hlgst4oPw8u+KSirKKC44HXR1OnTeOSkXa0gmObk5MDLy9eDEfz8yFMr4cIo1HNalhuYZjn3QnodqbEBiaTqbuOos4AQKiQHjbZ7VBTUwPVtbUeq589exaWvfYa5yYl1dLCz87JSUmQ9uijkJqa2q4Bij/0PXv2wBc7dsA/N27kDoIquebxBpVaO8v2ttlseGZxWTyCkpstRT4q8xaSBW2tl4uLufiUGEDp0bQ0KDh1SrJNONrPK6qbLVY4YyxIT4cRI0ZAQkIC/sgCdpnH2fDM6dPww9GjsGXzZsjJzeX6iCtOFyWccr1Bzy3iXF8DOVf3CkqTydRXR1EnAKCTEDlwSdXr9ZD37bcuU92lL1wIf3/9de6gMn/+fG5pnzB+PGRlZ0sGTF5OnLmZUoyz0FwShw6FwfHxMCwxEfr16wc9evRQZTo+tLj8WlQEp06dgsOHD8OJEycg75tvoKa+nutHgMyIruDS2AQwkGGY056w5BWU3GwpMlwgv9fbsWMH3HfffdfxR0eA2NjYVrMWiWBKKNfVigpoHtrWBQH7ZVaWYhf0fGoQV4OFIETvKZJvsIVMQGLrsACbrAzzhLd2gkDZvWvX/vagIPQKFpVvh/f4eXf1apf3ihivZv68efDcwoVcBDaMr42HILOfByBvnW77vVqe+irVf7H68rF+nY5l44tttpPe2gsCpWO2FH0Sx3b8AcRViBa8vhg4cCAnI58a7+5Ro+Bgbq4k10beOs/Lp6YY7Jj0/WRBgRrs0kLUJ7iOp3vJtkQEg9Lha4l7y5sES+KoyC/nuTk5cEdSUqvmH2ZmQmZmJnz08cfcbEry3TEeim4ZPBhy8/LEdkm2+kq/lZGpY5cijMY+Z86cqRNCXzAoudnSZHoEKMqnWJa8mVBIUCsE6uS0NNmXcW83BUIUKEcdTPyOdmrS2xg5+oI0XbmneeIlCpQOYO4BivqDLx3gZ0x3oaXRThsVFcXtL+9MToYfjhyRbRnHGJn3jhunSrc43iO8PYCSD1olBi+iQek49PzkazxLBMPvExNdBuKnqGZxMPR0t27d0OFYNq8WtRxu3A0WHnq+2rFD7ZYZb1gTfLhxJiQalI5Dz0oAeNabRO6+R0C4ek6Lhxx0IOA9zuUM3Kn2oK2872OAz5YezYnu8OETKP059PCCICiKi4u5GZEveJH+wQcfcHeb/OdyZCgIhFAxSoV39nWicdHukp1lB9lstiqxNH0CJTK5oWvXRFanywGWRUuX6CLmcRifCF2qGDfIO3PLFvjz5Mmi5SbZIDIigrOOBZEMhC9NBxuopqY7Sq5cOewLOZ9B6Tj0+BV/yFvEtZdeegkM4eGwMD0d8BCUkpLC9dHfJc0bX18UKUcbElYuOeR2jgvkC32/QOkAyL8A4H5fmHtaRtGF3+hwv0qbPJlLm4dL2guLFnHeRViEehjhdRTmF0RPGixjRo9uuRf1RW5SbfgVwt8fISl5OT5tol34wttvUEZGRkYGd+6MgbFifREAZy2r1erS5syHE0G6vMUH/xtd3zZt2gQfZWbCmXPnWrHFvURb2zZ+dtfo0fDggw/C6DFjWu1jfZGZVBs5D3oy9aGwrqFhiDvnXaE8/QYlMvJnf4mg5D2GXAmNFo7OnTu3OAw713F2Hi6xWODSxYtQV1cHJpqGyMhIuMFs5iJAxPXpw/1/oJW83FxISk72e7tCqN9+7SOdZZQElI5lHD2JXxOrAFxaudnv/HlBj8H4JJbYRozNGmedd1atgri4OHh71aqA8KvkfQMCYvl2ii8pFgNt60sGSgAIMptMm4Ci0sQKhbPl4sWL4ZVXXvHa1BmUWNnZOoTfzZo5E3A/Om/BgpawgrjcIxj54soG75WxAhV4uVUPSor6yGK1/lkqFUkJSpSpkzkm5nNg2XFiBURgCrGLI12cQfBNym1DhsDQYcNaWPEOxPwHLNv8ehOX+bdWrIAjR47AhAkTVH8VxMsfIKD80sIweNBtFDvm7upLDUp03g2prak5ACybKEZIfhk/9tNPPh9EEHzbt22DqqoquG/cOMUcdsX021PdAADl/tDw8NGFhYXN1xoSFclBiXLdeOONXRvr6zHywS1i5ERXMiynz50LeECJ6be7uqp2zGDZE3aAEb5YbLzpRhZQIlPHS8hvAKC3NyGcv8cQLV1NJti5a5fLE7cYWoFeV8WgPGdn2WSbzVYsh45lAyUKGxMT05ti2UNi8/PwLm5iTtdyKEdpmioF5RUICkq0WCytL4glVJasoEQ5aZqOCwLIBoDfjr8CO4CHH3zHjY+qnA80ApsHfDUVgvIsS1H3WK1WjJwiW5EdlCi52WyOgaamPQBwq9ie8O+4h8THw5KlS2H48OEdZr+pKlCy7AmqU6fUkpKS5mBOMhYioET5HeZItJOn+tIf5xAtGEh1+IgRcHtiIpd/x9n9rS1tPJFfvHgRykpLW95Ro9Vn9Xvv+SIG0TYqAuWB+sbG8WVlZc0xcmQuxECJ/YiLiwuuqqjALACtYlyL6SNeHdVUV7c8zHduiwGd8JCEBUPfuSsYhDUQkpSqxKLzaYTR+KjQR19ixtJdXaKgdAhBmWNi1gLLTpOiA840+LtO/jNXj/dxO3BHcjJ8lZUlNXvJ6angZeNKC8PMdxVDUvLOOhFUApQcezNNTwGAd4QGz5JKCRooBWmyFlj2WYvN9r6g2hJXUgyUHDDN5luhqelzACAWvw9BmTh8eEAs3wrNlGcpnW58SUkJvvFXpCgKSuwxvvcJoqhVFIDXGDNSaEgDpQctsuyWJop6xjnRkhQ6F0tDcVDyAjtS8K2WeznXQOkSItdYippmtVq3iAWQHPVVA0qn5TzTl/tMocrRQNlGU833jw8ruVy3HTtVgRKFiwMIro6JeZFl2YVio7wJASaCcnBCAny9d6/qHX1531GZ/Ckxrs8bEUbjUpLXPULGSHWg5IV22M0x6MFYIR0RWocH5Tc5OUKbKFZPLlBSADvZoKBZctqv/VGaakHJd8psMo0FikJwivI2cqeUDg7Kc00AsxiG2ekPaORuq3pQckt6XFxwdWWlJEs6misxg0TuwYMdafmuAYBXI4zGN9S2VLsCeECAkhf8xujoHo063X8BwAwACPHlFxtIoJTgNSN6hK/rZLe//mtpqXu7qy+KlLFNQIHSab9pplh2kS/g7CCg5MDIUtSrVqvVIiN+ZCEdkKD0B5ztHJTVLMuuhqCgFYEIRn5cAxqUbcA5DwBmAYDB088XQYmZKQ4dPqz6PaWI5ZsDo76+fnlRZeVvOVpkmcfkJ9ouQOmkJr3ZZPqj4+055kq5bt8ZSJfnXlzXcIn+AoKCMrtaLNk/Xx+tRn70yMShvYGyRU1oU+9EUQ+wLJsGFPWfGCwBv/QWJkYmPftEFh2UB99yC5ehLSSUy0TYBCy7l6KozEaW/VyOl4Q+CSpxo3YLSmc9GQBoVq8fdbW+/u4h8fGjfvjxx+4S61E2cnm5ucVJycm7AWC3AWBXNYDszxFk64xAwh0ClG11wbIsJu+5GwBGAcBIAAgXqC8S1fBO8QAA7EIgUs0pCDtU6ZCgdAFSzHaBEVn7O/5EBVHwEzEIugIAwOQG+yiKQkB26KKB0s3wsyyLT4J5kOK/vRwzKh6e2v45J9fGx1V4CGn7h6l18a00AhD/TlIUJetT1UBF9v8DI0Xo4m+0yEMAAAAASUVORK5CYII="},32:function(e,t,n){e.exports=n.p+"static/media/sheetie_logo.03ea8afb.png"},33:function(e,t,n){e.exports=n.p+"static/media/OnePaletteLogo.3b6b3749.png"},34:function(e,t,n){e.exports=n.p+"static/media/OnePaletteColorExport.7da8edce.png"},35:function(e,t,n){e.exports=n.p+"static/media/OnePaletteMenuView.ba138882.png"},36:function(e,t,n){e.exports=n.p+"static/media/OnePaletteEditColors.dba394b4.png"},37:function(e,t,n){e.exports=n.p+"static/media/HapticFeedBack.0df33438.png"},38:function(e,t,n){e.exports=n.p+"static/media/HapticFeedBack2.42ddad61.png"},43:function(e,t,n){e.exports=n(247)},48:function(e,t,n){e.exports=n.p+"static/media/image.f5e602f4.png"}},[[43,1,2]]]);
//# sourceMappingURL=main.f7817c1a.chunk.js.map