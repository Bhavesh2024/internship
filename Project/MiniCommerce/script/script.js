// Search Modal
try{
  const searchIcon = document.querySelector('.fa-search');
  if(matchMedia('max-width:768px')){
     searchIcon.setAttribute('data-bs-toggle','modal');
  }
} catch(error){
  console.error(error)
}

$(document).ready(function(){

  //Toggle Password 
  $('.fa-eye').on('click',function(){

    const password = document.getElementById('password')
    $(this).toggleClass('fa-eye')
    $('#password').siblings().find('fa-eye-slash') ? password.type = 'text' : password.type = 'password'
  
    
    // console.log($('#password').siblings().contains('fa-eye'))
    
  })
  // Product Modal
  $('.product').each(function(){
    const $card = $(this);
    const $description = $card.find('.product-detail .product-description p');
    const descriptionLength = $description.text().length;
    if(descriptionLength > 50){
      $description.html($($description).text().slice(0,50)).append('...')
    }
  });
  // Product Card
  $('.product-card').each(function() {
    const $card = $(this); // Cache the current card
    const $description = $card.find('.product-description .description');
    const $readMore = $card.find('.read-more');
    const $remainText = $('<span class="remainText"></span>').hide(); // Hidden span for remaining text
  
    const textLength = $description.text().length;

    $description.css('display','inline')
    if(textLength > 100){
      const availText = $description.text().slice(0, 100);
      const remainText = $description.text().slice(100, textLength);

      // Set the available and remaining text
      $description.html(availText).append($remainText.text(remainText));
      
      // Show the 'Read More' link
      $readMore.show();

      // Toggle the text on 'Read More' click
      $readMore.on('click', function() {
        const isReadMore = $(this).text().includes('Read More');
        $(this).text(isReadMore ? 'Read Less' : '...Read More');
        $remainText.toggle(); // Show/hide the remaining text
      });
    } else {
      $readMore.hide(); // Hide 'Read More' if the text is short
    }
  });

  // Sidebar
  $('#menuBar').click(function(){
    // $('#sidebar').slide();
    $('#sidebar').toggle();
  })


  // Product Data Table
  $('.product table tbody tr').each(function(){
     const $row = $(this);
     const $description = $row.find('.description');
     const cuttedDescription = $description.text().slice(0,50);
     $description.html(cuttedDescription+"...")

  })
});