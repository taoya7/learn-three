import * as THREE from 'three';

export default class Example {
    constructor(dom, width, height) {
        this.width = width;
        this.height = height;
        this.dom = dom;

        this.init();
        this.render();

        // 添加正方体
        var geometry = new THREE.BoxGeometry(10, 10,10);
        var material = new THREE.MeshLambertMaterial({
            color: 0x0000ff
        });
        this.mesh = new THREE.Mesh(geometry, material);
        this.scene.add(this.mesh);
        this.render();

        // 方式1
        this.animate();
        this.count = 1;

            // 方式2：
        setInterval(()=>{
            //
        }, 100)
    }
    animate(){
        if(this.count==200){ // 到200就停止
            return ;
        }
        requestAnimationFrame(this.animate.bind(this));

        this.mesh.rotation.x += 0.01;
        this.mesh.rotation.y += 0.01;
        this.render();
        this.count++;
    }
    init(){
        this.aspect = 6/4;
        // 场景
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color('#eeeeee');
        // 光源
        var point = new THREE.PointLight(0xffffff);
        point.position.set(400,200,300);
        this.scene.add(point);
        // 摄像机
        this.camera = new THREE.PerspectiveCamera(75, this.aspect, 0.1, 1000);
        this.camera.position.set(2,3, 20);
        this.camera.lookAt(0,0,0);
        // 渲染
        this.renderer = new THREE.WebGLRenderer({
            antialias: true,
        })
        this.renderer.setSize(this.width, this.height); // 渲染区域的尺寸
        this.renderer.setClearColor(0xb9d3ff,1); // 设置背景颜色
        this.renderer.render(this.scene, this.camera);
        document.querySelector(this.dom).appendChild(this.renderer.domElement); // 插入HTML
    }
    render(){
        this.renderer.render(this.scene, this.camera);
    }
}
