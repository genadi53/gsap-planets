import gsap from 'gsap/all';

export default class Animation{
    constructor(){

        this._planets = document.getElementsByClassName('dots');
        this._planets = [...this._planets];
        //console.log(this._planets);

        this._scaleBtn = document.querySelector('#scale-button');
        //console.log(this._scaleBtn);

        this._positionBtn = document.querySelector('#position-button');
        //console.log(this._positionBtn);

        this._stopBtn = document.querySelector('#stop-button');
        //console.log(this._stopBtn);

        this._tl = gsap.timeline();
    }

    init(){
        this.addEventListeners();
    }
    
    addEventListeners(){

        this._scaleBtn.addEventListener('click', ()=> {
            
            this._tl.restart().clear(true).to(this._planets, 
                {
                    id: 'scaleStagger', 
                    scale: 0, 
                    yoyo:true, 
                    repeat:-1, 
                    stagger: { each: 0.5 }

                });
        }); 

        this._positionBtn.addEventListener('click', ()=> {

            this._tl.restart().clear(true).to(this._planets,
                {
                    id: 'positionStgger',
                    y: -50,
                    yoyo: true,
                    repeat: -1,
                    stagger: { each : 0.5 }
                
                });         
        });

        this._stopBtn.addEventListener('click', ()=>{

            if(this._tl.isActive()){
                this._tl.restart().clear(true);
            }
        });
        
    }
}