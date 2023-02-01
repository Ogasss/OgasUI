<template>
    <aside class="aside">
        <div class="wrapper">
            <h2>组件列表</h2>
            <ol>
                <li>
                    <router-link to="/doc">
                        Button
                    </router-link>
                </li>
                <li>
                    <router-link to="/doc">
                        Button
                    </router-link>
                </li>
                <li>
                    <router-link to="/doc">
                        Button
                    </router-link>
                </li>
                <li>
                    <router-link to="/doc">
                        Button
                    </router-link>
                </li>
            </ol>
        </div>
    </aside>
</template>

<style lang="scss" scoped>
    .aside{
        border: 1px solid red;
        width: 128px;
        height: 100vh;
        .wrapper{
            margin-left: 8px;
        }
    }

</style>