<template>
  <div>
      <h2> this is User Card </h2>

        <!-- many times it also gappen that we want to use multiple slots for the 
        wrapper component but when we do that vue will don't know which contant to show where in wrapper component for that we can use named slots -->
        <!-- keep in maid all slots should have unique name and any slot should not have name as default because  vue will use that name for default slot in background by giving name to slots we can also pass html for diffrent slots by giving them v-slot:<name> directive when using wrapper component -->

        <slot name="userName"></slot>
        <slot name="userinfo"></slot>
        <slot>  
            <!-- in every slot tag we can also define html if we want so when we don't give html for that specific slot when we call the component the defaylt will show. it's not nessacery but if you want to show some default when you don't pass html for that slot you can use them -->
            <p> the default html content</p>
        </slot>

        <!-- you can give all slots some name and also leave one slot without name that will be default -->

  </div>
</template>

<script>
// in our component we can use this.$slots built in feacture to access all slots provided to this component. if we are finding specific ue can use this.slots.<slot_name> to get it  
export default {

}
</script>

<style>

</style>