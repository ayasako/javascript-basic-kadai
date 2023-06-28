// textというidを持つHTML要素を取得し、定数に代入
btn.addEventListener('click', () => {
    setTimeout(() => {
    const text = document.getElementById('text').textContent = 'ボタンをクリックしました';
    console.log('ボタンをクリックしました');
    }, 2000);
});

