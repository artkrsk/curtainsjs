/***
 Here we create a Vec3 class object
 This is a really basic Vector3 class used for vector calculations
 Highly based on https://github.com/mrdoob/three.js/blob/dev/src/math/Vector3.js and http://glmatrix.net/docs/vec3.js.html

 params :
 @x (float): X component of our vector
 @y (float): Y component of our vector
 @z (float): Z component of our vector

 returns :
 @this: our Vec3 class object
 ***/
export class Vec3 {
    constructor(x?: number, y?: number, z?: number);
    type: string;
    _x: number;
    _y: number;
    _z: number;
    set x(value: number);
    /***
     Getters and setters (with onChange callback)
     ***/
    get x(): number;
    set y(value: number);
    get y(): number;
    set z(value: number);
    get z(): number;
    onChange(callback: any): this;
    _onChangeCallback: any;
    /***
     Sets the vector from values

     params:
     @x (float): X component of our vector
     @y (float): Y component of our vector
     @z (float): Z component of our vector

     returns:
     @this (Vec2): this vector after being set
     ***/
    set(this: Vec2, x: any, y: any, z: any): Vec2;
    /***
     Adds a vector to this vector

     params:
     @vector (Vec3): vector to add

     returns:
     @this (Vec3): this vector after addition
     ***/
    add(this: Vec3, vector: any): Vec3;
    /***
     Adds a scalar to this vector

     params:
     @value (float): number to add

     returns:
     @this (Vec3): this vector after addition
     ***/
    addScalar(this: Vec3, value: any): Vec3;
    /***
     Subtracts a vector from this vector

     params:
     @vector (Vec3): vector to use for subtraction

     returns:
     @this (Vec3): this vector after subtraction
     ***/
    sub(this: Vec3, vector: any): Vec3;
    /***
     Subtracts a scalar to this vector

     params:
     @value (float): number to use for subtraction

     returns:
     @this (Vec3): this vector after subtraction
     ***/
    subScalar(this: Vec3, value: any): Vec3;
    /***
     Multiplies a vector with this vector

     params:
     @vector (Vec3): vector to use for multiplication

     returns:
     @this (Vec3): this vector after multiplication
     ***/
    multiply(this: Vec3, vector: any): Vec3;
    /***
     Multiplies a scalar with this vector

     params:
     @value (float): number to use for multiplication

     returns:
     @this (Vec3): this vector after multiplication
     ***/
    multiplyScalar(this: Vec3, value: any): Vec3;
    /***
     Copy a vector into this vector

     params:
     @vector (Vec3): vector to copy

     returns:
     @this (Vec3): this vector after copy
     ***/
    copy(this: Vec3, vector: any): Vec3;
    /***
     Clone this vector

     returns:
     @vector (Vec3): cloned vector
     ***/
    clone(): Vec3;
    /***
     Merges this vector with a vector when values are NaN. Mostly used internally.

     params:
     @vector (Vec3): vector to use for sanitization

     returns:
     @vector (Vec3): sanitized vector
     ***/
    sanitizeNaNValuesWith(vector: any): this;
    /***
     Apply max values to this vector

     params:
     @vector (Vec3): vector representing max values

     returns:
     @vector (Vec3): vector with max values applied
     ***/
    max(vector: any): this;
    /***
     Apply min values to this vector

     params:
     @vector (Vec3): vector representing min values

     returns:
     @vector (Vec3): vector with min values applied
     ***/
    min(vector: any): this;
    /***
     Checks if 2 vectors are equal

     returns:
     @isEqual (bool): whether the vectors are equals or not
     ***/
    equals(vector: any): boolean;
    /***
     Normalize this vector

     returns:
     @this (Vec3): normalized vector
     ***/
    normalize(this: Vec3): Vec3;
    /***
     Calculates the dot product of 2 vectors

     returns:
     @dotProduct (float): dot product of the 2 vectors
     ***/
    dot(vector: any): number;
    /***
     Apply a matrix 4 to a point (vec3)
     Useful to convert a point position from plane local world to webgl space using projection view matrix for example
     Source code from: http://glmatrix.net/docs/vec3.js.html

     params :
     @matrix (array): 4x4 matrix used

     returns :
     @this (Vec3): this vector after matrix application
     ***/
    applyMat4(this: Vec3, matrix: any): Vec3;
    /***
     Apply a quaternion (rotation in 3D space) to this vector

     params :
     @quaternion (Quat): quaternion to use

     returns :
     @this (Vec3): this vector after applying the transformation
     ***/
    applyQuat(this: Vec3, quaternion: any): Vec3;
    /***
     Project 3D coordinate to 2D point

     params:
     @camera (Camera): camera to use for projection
     ***/
    project(camera: any): this;
    /***
     Unproject 2D point to 3D coordinate

     params:
     @camera (Camera): camera to use for projection
     ***/
    unproject(camera: any): this;
}
//# sourceMappingURL=Vec3.d.ts.map