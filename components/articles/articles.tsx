'use client';

import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import Breadcrumbs from './breadcrumbs';


const Articles = (
    // { paths }
) => {
    const articleData = {
        title: '如何有效地学习编程',
        date: '2023-08-31',
        clickCount: 100,
        content: `
          <p>学习编程是一项持续学习和不断探索的过程。下面是一些有效的学习编程的方法：
          学习编程是一项持续学习和不断探索的过程。下面是一些有效的学习编程的方法
          学习编程是一项持续学习和不断探索的过程。下面是一些有效的学习编程的方法
          学习编程是一项持续学习和不断探索的过程。下面是一些有效的学习编程的方法
          学习编程是一项持续学习和不断探索的过程。下面是一些有效的学习编程的方法
          学习编程是一项持续学习和不断探索的过程。下面是一些有效的学习编程的方法
          学习编程是一项持续学习和不断探索的过程。下面是一些有效的学习编程的方法</p>
          <p>1. 建立良好的学习计划和目标，确保学习的内容有条理且有重点。</p>
          <p>2. 学习一门编程语言，并逐步深入了解其核心概念和语法规则。</p>
          <p>3. 阅读优质的编程书籍、教程和文档，从中获取知识和经验。</p>
          <img src="/images/Image.png" alt="学习编程"/>
          <p>4. 参与开源项目或个人项目，通过实践来加深对编程的理解和应用。</p>
          <p>5. 刻意练习，解决实际的编程问题，提升自己的编码能力。</p>
          <p>6. 寻找编程社区和论坛，与他人交流，分享经验和学习资源。</p>
          <p>通过坚持不懈地学习和实践，你将逐渐掌握编程技能，并能够应用于实际项目中。</p>
        `,
        articleAttachmentTitle:'授课计划表.rar',
        articleAttachmentDownloadCount: 12
      };

  return (
    <div>
        <Breadcrumbs/>
        
        <div className="max-w-6xl mx-auto flex flex-col items-center justify-center bg-white pt-3 sm:pt-8 p-10 rounded shadow sm:shadow-none">
            <div className='sm:hidden self-start text-lg tracking-wider mb-2 border-b text-paginationColor border-paginationColor pb-0.5'>新闻公告</div>
            <h1 className="text-lg sm:text-2xl font-semibold sm:font-bold mb-2">{articleData.title}</h1>
            <div className="text-sm sm:text-base text-gray-500 mb-2 border-b w-full border-listGrayBorder pb-1 flex justify-center">
                发布时间：{articleData.date} 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                点击次数：{articleData.clickCount}
            </div>
            <div className='articles' dangerouslySetInnerHTML={{ __html: articleData.content }}></div>
            {articleData.articleAttachmentTitle && (
                <div className='self-start'>
                    附件
                    <a href="/" download>【{ articleData.articleAttachmentTitle }】</a>
                    已下载{ articleData.articleAttachmentDownloadCount }次
                </div>
            )}
        </div>
    </div>

  );
};

export default Articles;