document.addEventListener('DOMContentLoaded', function() {
     初始推文数据
    const initialTweets = [
        {
            id 1,
            author 张三,
            username @zhangsan,
            avatar httpsvia.placeholder.com150,
            content 欢迎来到我的个人博客！这是我发布的第一篇推文。我将在这里分享我的技术心得和生活感悟。,
            time 刚刚,
            likes 0,
            comments 0,
            shares 0
        }
    ];
    
     渲染推文列表
    function renderTweets(tweets) {
        const tweetList = document.getElementById('tweet-list');
        tweetList.innerHTML = '';
        
        tweets.forEach(tweet = {
            const tweetElement = document.createElement('div');
            tweetElement.className = 'tweet';
            tweetElement.innerHTML = `
                div class=tweet-header
                    img src=${tweet.avatar} alt=${tweet.author} class=tweet-avatar
                    span class=tweet-author${tweet.author}span
                    span class=tweet-username${tweet.username}span
                    span class=tweet-time${tweet.time}span
                div
                div class=tweet-content${tweet.content}div
                div class=tweet-actions
                    div class=tweet-action data-action=like data-id=${tweet.id}
                        i class=far fa-hearti
                        span class=like-count${tweet.likes}span
                    div
                    div class=tweet-action data-action=comment data-id=${tweet.id}
                        i class=far fa-commenti
                        span${tweet.comments}span
                    div
                    div class=tweet-action data-action=share data-id=${tweet.id}
                        i class=fas fa-retweeti
                        span${tweet.shares}span
                    div
                div
            `;
            tweetList.appendChild(tweetElement);
        });
        
         添加事件监听器
        document.querySelectorAll('.tweet-action').forEach(action = {
            action.addEventListener('click', handleTweetAction);
        });
    }
    
     处理推文动作（点赞、评论、分享）
    function handleTweetAction(event) {
        const action = event.currentTarget.getAttribute('data-action');
        const tweetId = parseInt(event.currentTarget.getAttribute('data-id'));
        
         在实际应用中，这里会发送请求到服务器
        console.log(`执行动作 ${action} 推文ID ${tweetId}`);
        
         更新UI
        if (action === 'like') {
            const likeIcon = event.currentTarget.querySelector('i');
            const likeCount = event.currentTarget.querySelector('.like-count');
            
            if (likeIcon.classList.contains('far')) {
                likeIcon.classList.remove('far');
                likeIcon.classList.add('fas', 'liked');
                likeCount.textContent = parseInt(likeCount.textContent) + 1;
            } else {
                likeIcon.classList.remove('fas', 'liked');
                likeIcon.classList.add('far');
                likeCount.textContent = parseInt(likeCount.textContent) - 1;
            }
        }
    }
    
     发布新推文
    document.getElementById('post-tweet').addEventListener('click', function() {
        const tweetContent = document.getElementById('tweet-content').value.trim();
        
        if (tweetContent) {
            const newTweet = {
                id Date.now(),  使用时间戳作为ID
                author 张三,
                username @zhangsan,
                avatar httpsvia.placeholder.com150,
                content tweetContent,
                time 刚刚,
                likes 0,
                comments 0,
                shares 0
            };
            
             在实际应用中，这里会发送请求到服务器
            initialTweets.unshift(newTweet);
            renderTweets(initialTweets);
            
             清空输入框
            document.getElementById('tweet-content').value = '';
        } else {
            alert('请输入推文内容！');
        }
    });
    
     初始渲染
    renderTweets(initialTweets);
});