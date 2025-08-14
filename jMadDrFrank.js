//jMadDrFrank.js
class $ {
  constructor(){
    this.c = document.createElement('canvas')
    document.body.style.margin = '0'
    document.body.style.overflow = 'hidden'
    this.c.style.width = '100vw'
    this.c.style.height = '100vh'
    this.c.width = 1920
    this.c.height = 960
    this.context = this.c.getContext("2d")
    this.imgData = this.context.createImageData(this.c.width, this.c.height)
    document.body.appendChild(this.c)
    this.Vector1 = class Vector1{
      constructor(x){
        let vec = {x:x}
        vec.distanceTo = function(vec2) {
          return Math.abs(this.x-vec2.x)
        };
        return vec
      }
    }
    this.Vector2 = class Vector2{
      constructor(x, y){
        let vec = {x:x, y:y}
        vec.distanceTo = function(vec2) {
          return ((this.x-vec2.x)**2+(this.y-vec2.y)**2)**0.5
        }
        return vec
      }
    }
    this.Vector3 = class Vector3{
      constructor(x, y, z){
        let vec = {x:x, y:y, z:z}
        vec.distanceTo = function(vec2) {
          return ((this.x-vec2.x)**2+(this.y-vec2.y)**2+(this.z-vec2.z)**2)**0.5
        }
        return vec
      }
    }
    this.Vector4 = class Vector4{
      constructor(x, y, z, a){
        let vec = {x:x, y:y, z:z, a:a}
        vec.distanceTo = function(vec2) {
          return ((this.x-vec2.x)**2+(this.y-vec2.y)**2+(this.z-vec2.z)**2+(this.a-vec2.a)**2)**0.5
        }
        return vec
      }
    }
    let rnd=_=>{
      return Math.random()
    }
    let sin=(x)=>{
      return Math.sin(x)
    }
    let cos=(x)=>{
      return Math.cos(x)
    }
    let toDegrees=(angle)=>{
      return angle * (180 / Math.PI);
    }
    let toRadians=(angle)=>{
      return angle * (Math.PI / 180);
    }
    this.time=0
    let colors=new this.Vector3("rnd()","rnd()","rnd()")
    this.update=_=>{
      let compute=`
        for (let i = 0; i < this.imgData.data.length; i += 4) {
          let x = i % (this.c.width*4);
          let y = i / (this.c.width*4) % (this.c.height*4);
          x/=this.c.width*4;
          y/=this.c.height;
          let t=this.time/10;
          this.imgData.data[i + 0] = (`+colors.x+`)*255;
          this.imgData.data[i + 1] = (`+colors.y+`)*255;
          this.imgData.data[i + 2] = (`+colors.z+`)*255;
          this.imgData.data[i + 3] = 255;
        }
      `
      this.time++
      requestAnimationFrame(this.update)
      this.c.width = innerWidth
      this.c.height = innerHeight
      this.imgData = this.context.createImageData(this.c.width, this.c.height)
      document.body.style.margin=0

      // Recorrer cada píxel de la imagen
      eval(compute)

      // Dibujar la imagen de datos en el canvas
      this.context.putImageData(this.imgData, 0, 0)
    }
    this.update()
    this.Epilepsia2d=class Epilepsia2d{
      constructor(vec3){
        colors=vec3
      }
    }
  }
}

export default new $()