<template>
	<div class="news-list">
        <div class="row">
            <div class="page-header">
                <h2> {{newsdetail.title}}  <small>{{newsdetail.pubtime}}</small></h2>
                <p>
                {{newsdetail.desc}}
                </p>
            </div>

        </div>
    </div>
</template>

<style type="text/css">
	@import "http://cdn.bootcss.com/bootstrap/3.3.0/css/bootstrap.min.css"
</style>

<script type="text/javascript">

	export default{
		data(){
			return {
				newsdetail:{}
			}
			
		},
		created(){
			alert(this.$route.params.newsId);
		}
	}

</script>