// Product Card
$(document).ready(function(){
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
});