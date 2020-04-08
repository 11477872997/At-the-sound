import $ from 'jquery'
$(function(){
        var show_num = [];
        draw(show_num);

        $("#canvas").on('click',function(){
            draw(show_num);
        })
        $(".btn").on('click',function(){
            var val = $(".input_val").val().toLowerCase()

            var num = show_num.join("");
            if(val==''){
                alert('��������֤�룡');
            }else if(val == num){
                alert('�ύ�ɹ���');
                $(".input_val").val('');
                // draw(show_num);

            }else{
                alert('��֤��������������룡');
                $(".input_val").val('');
                // draw(show_num);
            }
        })
     })

    //���ɲ���Ⱦ����֤��ͼ��
    function draw(show_num) {
        var canvas_width=$('#canvas').width();
        var canvas_height=$('#canvas').height();
        var canvas = document.getElementById("canvas");//��ȡ��canvas�Ķ�����Ա
        var context = canvas.getContext("2d");//��ȡ��canvas��ͼ�Ļ�������Ա���ݵ���̨
        canvas.width = canvas_width;
        canvas.height = canvas_height;
        var sCode = "a,b,c,d,e,f,g,h,i,j,k,m,n,p,q,r,s,t,u,v,w,x,y,z,A,B,C,E,F,G,H,J,K,L,M,N,P,Q,R,S,T,W,X,Y,Z,1,2,3,4,5,6,7,8,9,0";
        var aCode = sCode.split(",");
        var aLength = aCode.length;//��ȡ������ĳ���
        
        for (var i = 0; i <6; i++) {  //�����forѭ�����Կ�����֤��λ�����������ʾ6λ����4�ĳ�6���ɣ�
            var j = Math.floor(Math.random() * aLength);//��ȡ�����������ֵ
            var deg = Math.random() * 30 * Math.PI / 180;//����0~30֮����������
            // var deg = Math.random() - 0.5; //����һ���������
            var txt = aCode[j];//�õ������һ������
            show_num[i] = txt.toLowerCase();
            var x = 10 + i * 20;//������canvas�ϵ�x����
            var y = 20 + Math.random() * 8;//������canvas�ϵ�y����
            context.font = "bold 23px ΢���ź�";

            context.translate(x, y);
            context.rotate(deg);

            context.fillStyle = randomColor();
            context.fillText(txt, 0, 0);

            context.rotate(-deg);
            context.translate(-x, -y);
        }
				for (var i = 0; i <= 5; i++) { //��֤������ʾ����
				            context.strokeStyle = randomColor();
				            context.beginPath();
				            context.moveTo(Math.random() * canvas_width, Math.random() * canvas_height);
				            context.lineTo(Math.random() * canvas_width, Math.random() * canvas_height);
				            context.stroke();
				        }
				        for (var i = 0; i <= 30; i++) { //��֤������ʾС��
				            context.strokeStyle = randomColor();
				            context.beginPath();
				            var x = Math.random() * canvas_width;
				            var y = Math.random() * canvas_height;
				            context.moveTo(x, y);
				            context.lineTo(x + 1, y + 1);
				            context.stroke();
				        }
				}
				
				//�õ��������ɫֵ
				function randomColor() {
					var r = Math.floor(Math.random() * 256);
					var g = Math.floor(Math.random() * 256);
					var b = Math.floor(Math.random() * 256);
					return "rgb(" + r + "," + g + "," + b + ")";
				}
				
			
		