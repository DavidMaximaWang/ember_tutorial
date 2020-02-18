import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { click, render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Component | rental/image", function(hooks) {
  setupRenderingTest(hooks);

  test("it renders a given image", async function(assert) {
    await render(
      hbs`<Rental::Image src = "/assets/images/teaching-tomster.png" alt="Teaching Tomster"/>`
    );
    assert.dom(".image").exists();
    assert
      .dom(".image img")
      .hasAttribute("src", "/assets/images/teaching-tomster.png");
    assert.dom(".image img").hasAttribute("alt", "Teaching Tomster");
  });
  test("click on the component toggle the size", async function(assert) {
    await render(hbs`<Rental:Image src="/assets/teaching-tomster.png" 
    alt="Teaching Tomster"/>`);
    assert.dom('button.image').exists();
    await click('button.image');
    assert.dom('.image').hasClass('large');
    assert.dom('.image small').hasText('View Smaller');

    await click('button.image');
    assert.dom('.image').doesNotHaveClass('large');
    assert.dom('.image small').hasText('View Larger');


  });
});
