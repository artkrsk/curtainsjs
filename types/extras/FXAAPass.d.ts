/*** FXAAPASS CLASS ***/
/***
 Here we create our FXAAPass object
 This is just a regular ShaderPass with preset shaders and a resolution uniform

 params: see ShaderPas class object

 returns :
 @this: our FXAAPass element
 ***/
export class FXAAPass extends ShaderPass {
    constructor(curtains: any, { renderOrder, depthTest, texturesOptions, crossOrigin, depth, clear, renderTarget, }?: {});
    /***
     This is called each time the FXAAPass has been resized

     params :
     @callback (function) : a function to execute

     returns :
     @this: our FXAAPass to handle chaining
     ***/
    onAfterResize(callback: any): this;
    _onFXAAPassAfterResizeCallback: any;
}
import { ShaderPass } from "../framebuffers/ShaderPass.js";
//# sourceMappingURL=FXAAPass.d.ts.map