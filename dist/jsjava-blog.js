/*@version:2.1 @author:zhangbo @email:freeeob@gmail.com GPL2.1*/function BlogRss(){this.jsjava_class="jsorg.eob.blog.BlogRss";};BlogRss.prototype.getVersion=function(){return this.version;};BlogRss.prototype.setVersion=function(version){this.version=version;};BlogRss.prototype.getRssChannel=function(){return this.channel;};BlogRss.prototype.setRssChannel=function(channel){this.channel=channel;};function BlogRssChannel(){this.jsjava_class="jsorg.eob.blog.BlogRssChannel";this.items=new ArrayList();};BlogRssChannel.prototype.getTitle=function(){return this.title;};BlogRssChannel.prototype.setTitle=function(title){this.title=title;};BlogRssChannel.prototype.getLink=function(){return this.link;};BlogRssChannel.prototype.setLink=function(link){this.link=link;};BlogRssChannel.prototype.getDescription=function(){return this.description;};BlogRssChannel.prototype.setDescription=function(description){this.description=description;};BlogRssChannel.prototype.getPubDate=function(){return this.pubDate;};BlogRssChannel.prototype.setPubDate=function(pubDate){this.pubDate=pubDate;};BlogRssChannel.prototype.getGenerator=function(){return this.generator;};BlogRssChannel.prototype.setGenerator=function(generator){this.generator=generator;};BlogRssChannel.prototype.getImage=function(){return this.image;};BlogRssChannel.prototype.setImage=function(image){this.image=image;};BlogRssChannel.prototype.addItem=function(item){this.items.add(item);};BlogRssChannel.prototype.getItem=function(index){return this.items.get(index);};BlogRssChannel.prototype.getItemById=function(itemId){var it=this.iterator();while(it.hasNext()){var item=it.next();if(item.getId()==itemId){return item;}}};BlogRssChannel.prototype.iterator=function(){return this.items.iterator();};BlogRssChannel.prototype.getItems=function(){return this.items;};function BlogRssChannelImage(){this.jsjava_class="jsorg.eob.blog.BlogRssChannelImage";};BlogRssChannelImage.prototype.getTitle=function(){return this.title;};BlogRssChannelImage.prototype.setTitle=function(title){this.title=title;};BlogRssChannelImage.prototype.getLink=function(){return this.link;};BlogRssChannelImage.prototype.setLink=function(link){this.link=link;};BlogRssChannelImage.prototype.getURL=function(){return this.url;};BlogRssChannelImage.prototype.setURL=function(url){this.url=url;};BlogRssChannelImage.prototype.toString=function(){var str="{";str+="title="+this.title;str+=",link="+this.link;str+=",url="+this.url;str+="}";return str;};function BlogRssItem(){this.jsjava_class="jsorg.eob.blog.BlogRssItem";};BlogRssItem.prototype.getCreator=function(){return this.creator;};BlogRssItem.prototype.setCreator=function(creator){this.creator=creator;};BlogRssItem.prototype.getTitle=function(){return this.title;};BlogRssItem.prototype.setTitle=function(title){this.title=title;};BlogRssItem.prototype.getLink=function(){return this.link;};BlogRssItem.prototype.setLink=function(link){this.link=link;};BlogRssItem.prototype.getPubDate=function(){return this.pubDate;};BlogRssItem.prototype.setPubDate=function(pubDate){this.pubDate=pubDate;};BlogRssItem.prototype.getId=function(){return this.id;};BlogRssItem.prototype.setId=function(id){this.id=id;};BlogRssItem.prototype.getComments=function(){return this.comments;};BlogRssItem.prototype.setComments=function(comments){this.comments=comments;};BlogRssItem.prototype.getDescription=function(){return this.description;};BlogRssItem.prototype.setDescription=function(description){this.description=description;};BlogRssItem.prototype.toString=function(){var str="{";str+="id="+this.id;str+=",creator="+this.creator;str+=",title="+this.title;str+=",link="+this.link;str+=",pubDate="+this.pubDate;str+=",comments="+this.comments;str+="}";return str;};function BlogRssItemComment(){this.jsjava_class="jsorg.eob.blog.BlogRssItemComment";};BlogRssItemComment.prototype.getId=function(){return this.id;};BlogRssItemComment.prototype.setId=function(id){this.id=id;};BlogRssItemComment.prototype.getItemId=function(){return this.itemId;};BlogRssItemComment.prototype.setItemId=function(itemId){this.itemId=itemId;};BlogRssItemComment.prototype.getCommentRss=function(){return this.commentRss;};BlogRssItemComment.prototype.setCommentRss=function(commentRss){this.commentRss=commentRss;};BlogRssItemComment.prototype.toString=function(){var str="{";str+="id="+this.id;str+=",itemId="+this.itemId;str+=",commentRss="+this.commentsRss;str+="}";return str;};function BlogRssReader(){this.jsjava_class="jsorg.eob.blog.BlogRssReader";};BlogRssReader.prototype.readRss=function(xmlStr){var parser=new XmlBrowserParser();parser.loadXml(xmlStr);var blogdom=parser.toDocument();if(!blogdom){return null;}var blogRss=new BlogRss();var rootElem=blogdom.documentElement;if(!rootElem){return null;}var version=rootElem.getAttribute("version");blogRss.setVersion(version);var channel=new BlogRssChannel();var channelElem=rootElem.selectSingleNode("channel");var ctitle=getNodeValue(channelElem,"title");var clink=getNodeValue(channelElem,"link");var cdescription=getNodeValue(channelElem,"description");;var cgenerator=getNodeValue(channelElem,"generator");channel.setTitle(ctitle);channel.setLink(clink);channel.setDescription(cdescription);channel.setGenerator(cgenerator);var channelImage=new BlogRssChannelImage();var imageElem=channelElem.selectSingleNode("image");if(imageElem){var imageNodeType=imageElem.firstChild.nodeType;if(imageNodeType==3){channelImage.setURL(imageElem.firstChild.nodeValue);}else{var imageTitle=getNodeValue(imageElem,"title");var imageLink=getNodeValue(imageElem,"link");var imageURL=getNodeValue(imageElem,"url");channelImage.setTitle(imageTitle);channelImage.setLink(imageLink);channelImage.setURL(imageURL);}channel.setImage(channelImage);}itemElems=channelElem.selectNodes("item");var itemElemsLenght=itemElems.length;for(var i=0;i<itemElemsLenght;i++){var itemElem=itemElems[i];var item=new BlogRssItem();var icreator=getNodeValue(itemElem,"dc:creator");if(icreator==null){icreator=getNodeValue(itemElem,"author");}var ititle=getNodeValue(itemElem,"title");var ilink=getNodeValue(itemElem,"link");var iguid=getNodeValue(itemElem,"guid");var idescription=getNodeValue(itemElem,"description");var ipubDate=getNodeValue(itemElem,"pubDate");item.setCreator(icreator);item.setTitle(ititle);item.setLink(ilink);item.setId(iguid);item.setDescription(idescription);item.setPubDate(ipubDate);var commentId=getNodeValue(itemElem,"wfw:comment");var commentForItemId=getNodeValue(itemElem,"comments");var commentRss=getNodeValue(itemElem,"wfw:commentRss");var comment=new BlogRssItemComment();comment.setId(commentId);comment.setItemId(commentForItemId);comment.setCommentRss(commentRss);item.setComments(comment);channel.addItem(item);}blogRss.setRssChannel(channel);return blogRss;function getNodeValue(parentElem,elemTagName){var value=null;var valueElem=parentElem.selectSingleNode(elemTagName+"/text()");if(valueElem){value=valueElem.nodeValue;}return value;}};