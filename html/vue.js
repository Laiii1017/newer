const {createApp,ref}  = Vue;

var Character1 = createApp({
    data() {
        return{
            Character1:[
                {text:"Z.Z的室友，童心未泯的個性常引發很多趣事，是一個樂天的宅貓。"},
            ]
        }
    }
}).mount("#character1");

var Character2 = createApp({
    data(){
        return{
            Character2:[
                {text:"ZIZONE的屋主，是一個認真生活，勤勞工作的上班族。"},
            ]
        }
    }
}).mount("#character2");

var Character3 = createApp({
    data(){
        return{
            Character3:[
                {text:"PINGO跟Z.Z的好朋友，是個不善與人交際但對人生充滿夢想的小夥伴。"},
            ]
        }
    }
}).mount("#character3");