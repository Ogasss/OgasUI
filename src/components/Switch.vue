<template>
    <button class="wrapper">
        <div class="ball"></div>
    </button>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>

    $width: 128px;
    $height: $width/2;
    $radius: $width*0.375;
    $bgColor: rgb(0,170,195);

    .wrapper{
        padding: 2%;
        display: flex;
        align-items: center;
        border: 1px solid white;
        width: $width;
        height: $height;
        border-radius: $radius;
        background: rgb(190, 190, 190);
        transition: all 0.3s ease;
    }

    .ball{
        margin-left: 0%;
        border: 1px solid rgb(190, 190, 190);
        border-radius: 50%;
        width: 44%;
        height: 88%;
        background: white;
        transition: all 0.3s ease;
    }
    .wrapper:hover{
        background: $bgColor;
        > .ball{
            margin-left: calc(100% - 44% + 2%);
        }
    } 
</style>