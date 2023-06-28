//HTML要素は、定数に代入・２秒後の表示
btn.addEventListener('click', () => {
    setTimeout(() => {
    const text = document.getElementById('text').textContent = 'ボタンをクリックしました';
    console.log('ボタンをクリックしました');
    }, 2000);
});

