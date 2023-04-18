<script>
const allOfH2 = document.querySelectorAll('h2')
allOfH2.forEach (query =>{
newH2 = query.textContent.split(' ')
const firstWord=newH2[0]
const other = newH2.slice(1).join(' ')
query.innerHTML = `<span style="color:red"> ${firstWord} </span> ${other}`
  
})
</script>
