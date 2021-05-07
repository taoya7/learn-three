import * as THREE from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
export default class Example {
    constructor(dom, width, height) {
        this.width = width;
        this.height = height;
        this.dom = dom;

        this.init();
        this.initController();
        this.initAxesHelp();
        this.initGridHelp();
        this.render();

        // 添加正方体
        const box = new THREE.BoxGeometry(10, 10, 10);
        const boxMer = new THREE.MeshBasicMaterial({
            color: 0xe4d3cf,
        })
        const boxCube = new THREE.Mesh(box, boxMer);
        boxCube.castShadow = true;
        this.scene.add(boxCube);
        this.render();
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
    initAxesHelp (){
        this.axesHelper = new THREE.AxesHelper(100);
        this.scene.add(this.axesHelper);
    }
    initGridHelp(){
        this.gridHelper = new THREE.GridHelper(100, 100);
        this.scene.add(this.gridHelper);
    }
    initController(){
        const that = this;
        this.controller = new OrbitControls(this.camera, this.renderer.domElement);
        this.controller.addEventListener('change', function () {
            that.render();
        })
    }

    render(){
        this.renderer.render(this.scene, this.camera);
    }
}
