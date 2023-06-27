// textというidを持つHTML要素を取得し、定数に代入
btn.addEventListener('click', () => {
  const text = document.getElementById('text').textContent = 'ボタンをクリックしました';
  console.log('ボタンをクリックしました');
});