import  $ from  "jquery";
class Demo {
    public message(): string {
        return "App is loaded!!!"
    }
}
console.log(new Demo().message());

$('#dummyButton').on('click', () => alert('You have clicked me'));