new Vue ({
    el: '.all',
    data: {
        block: '',
        input: '',
        name: '',
        status: '',
        sec: '',
        min: '',
        hour: '',
        s1: '',
        m1: '',
        h1: '',
        s2: '',
        m2: '',
        h2: '',
        secid: '',
        secdate: '',
        secdesc: '',
        isPageLoaded: true,

        plan: [
            {
                id: '',
                desc: '',
                status: '',
            }
        ],
        process: [
            {
                id: '',
                desc: '',
                datestart: '',
                respn: '',
                status: '',
            }
        ],
        finish: [
            {
                id: '',
                desc: '',
                datestart: '',
                dateend: '',
                respn: '',
                time: '',
                status: '',
            }
        ],
        count: 1,
        plancnt: 1,
        processcnt: 1,
        finish: 1,
    },
    methods: {
        set_user() {
            var currentUser = $(event.target).closest('.popup').find(':input').val();
            var currUs = $('#userid').val();
            if(currUs == '') {
                alert("Введите имя ответственного!");
            } else {
                name: this.name;
                this.isPageLoaded = false;
            }
        },
        plus: function() {
            if(this.input == '' ) {
                alert('Заполните поле!')
            }
            this.plan.push({
                id: this.count++,
                desc: this.input,
            })
            this.input = ''
        },
        dragStart: (event,item) => {

        },
        drop: (event, list) => {

        },
        next_plan: function(e) {
            var taskNum = $(e.target).closest('li').find('.indef').text();
            var desc = $(e.target).closest('li').find('.columns__plan_desc').text();
            this.plan.pop({
                id: taskNum,
            });
            data1 = new Date();
            this.h1 = data1.getHours();
            this.m1 = data1.getMinutes();
            this.s1 = data1.getSeconds();
            this.process.push({
                id: taskNum,
                desc: desc,
                datestart: new Date(),
                respn: this.name,
            });
        },
        next_process: function(e) {
            var numberTask = $(e.target).closest('li').find('.indef').text()
            var desc = $(e.target).closest('li').find('.columns__plan_desc').text()
            var datestart = $(e.target).closest('li').find('.date-span').text()
            this.process.pop({
                id: numberTask,
            });
            Data2 = new Date();
            this.h2 = Data2.getHours();
            this.m2 = Data2.getMinutes();
            this.s2 = Data2.getSeconds();
            //var h;
            if((this.h2-this.h1) < 9){
                this.hour = '0'+(this.h2-this.h1)
            }
            var m;
            if((this.m2-this.m1) < 9){
                this.min = '0'+(this.m2-this.m1)
            }
            var s;
            if((this.Seconds2-this.Seconds1) < 9){
                this.sec = '0'+(this.s2-this.s1)
            }
            this.finish.push({
                id: numberTask,
                desc: desc,
                datestart: datestart,
                dateend: new Date(),
                responsable: this.name,
                during: this.hour+':'+this.min+':'+this.sec,
            })
        },
        del: function(e) {
            var taskNum = $(e.target).closest('li').find('.indef').text();
            this.finish.pop({
                id: taskNum,
            });
        },
    },

})