(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{303:function(t,a,n){"use strict";n.r(a);var s=n(0),e=Object(s.a)({},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"content"},[n("h3",{attrs:{id:"如何使用-skywalking-agent-？"}},[t._v("如何使用 Skywalking Agent ？")]),t._v(" "),n("blockquote",[n("ul",[n("li",[t._v("作者：innerpeacez")]),t._v(" "),n("li",[n("a",{attrs:{href:"https://ipzgo.top/2019-08-30-%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8-Skywalking-Agent/",target:"_blank",rel:"noopener noreferrer"}},[t._v("原文地址"),n("OutboundLink")],1)])])]),t._v(" "),n("p",[t._v("如果你还不知道 Skywalking agent 是什么，"),n("a",{attrs:{href:"https://github.com/apache/skywalking/blob/master/docs/en/concepts-and-designs/README.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("请点击这里查看 Probe"),n("OutboundLink")],1),t._v(" 或者"),n("a",{attrs:{href:"https://github.com/apache/skywalking/blob/master/docs/en/setup/service-agent/java-agent/README.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里查看快速了解agent"),n("OutboundLink")],1),t._v(",由于我这边大部分都是 JAVA 服务，所以下文以 Java 中使用 agent 为例，提供了以下三种方式供你选择")]),t._v(" "),n("h4",{attrs:{id:"三种方式："}},[t._v("三种方式：")]),t._v(" "),t._m(0),t._v(" "),n("h5",{attrs:{id:"_1-使用官方提供的基础镜像"}},[t._v("1.使用官方提供的基础镜像")]),t._v(" "),n("p",[t._v("查看官方 docker hub 提供的"),n("a",{attrs:{href:"https://hub.docker.com/r/apache/skywalking-base",target:"_blank",rel:"noopener noreferrer"}},[t._v("基础镜像"),n("OutboundLink")],1),t._v("，只需要在你构建服务镜像是 From 这个镜像即可，直接集成到 Jenkins 中可以更加方便")]),t._v(" "),n("h5",{attrs:{id:"_2-将-agent-包构建到已经存在的基础镜像中"}},[t._v("2.将 agent 包构建到已经存在的基础镜像中")]),t._v(" "),n("p",[t._v("提供这种方式的原因是：官方的镜像属于精简镜像，并且是 openjdk ，可能很多命令没有，需要自己二次安装，以下是我构建的过程")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("下载 oracle jdk")]),t._v(" "),n("p",[t._v("这个现在 oracle 有点恶心了，wget 各种不行，然后我放弃了，直接从"),n("a",{attrs:{href:"https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网"),n("OutboundLink")],1),t._v("下载了")])]),t._v(" "),n("li",[n("p",[t._v("下载 skywalking "),n("a",{attrs:{href:"https://www.apache.org/dyn/closer.cgi/skywalking/6.3.0/apache-skywalking-apm-6.3.0.tar.gz",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方发行包"),n("OutboundLink")],1),t._v("，并解压（以6.3.0为例）")]),t._v(" "),t._m(1)]),t._v(" "),t._m(2)]),t._v(" "),n("p",[t._v("这里由于 alpine 是基于mini lib 的，但是 java 需要 glibc ,所以加入了 glibc 相关的东西，最后构建出的镜像大小在 490M 左右，因为加了挺多命令还是有点大，仅供参考，同样构建出的镜像也可以直接配置到 jenkins 中。")]),t._v(" "),n("h5",{attrs:{id:"_3-sidecar-模式挂载-agent"}},[t._v("3.sidecar 模式挂载 agent")]),t._v(" "),n("p",[t._v("如果你们的服务是部署在 Kubernetes 中，你还可以使用这种方式来使用 Skywalking Agent ,这种方式的好处在与不需要修改原来的基础镜像，也不用重新构建新的服务镜像，而是以sidecar 模式，通过共享volume的方式将agent 所需的相关文件挂载到已经存在的服务镜像中")]),t._v(" "),t._m(3),t._v(" "),n("ul",[n("li",[n("p",[t._v("下载skywalking "),n("a",{attrs:{href:"https://www.apache.org/dyn/closer.cgi/skywalking/6.3.0/apache-skywalking-apm-6.3.0.tar.gz",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方发行包"),n("OutboundLink")],1),t._v("，并解压")]),t._v(" "),t._m(4)]),t._v(" "),t._m(5)]),t._v(" "),n("p",[t._v("注意：这里我没有在dockerfile中下载skywalking 发行包是因为保证构建出的 sidecar 镜像保持最小，bosybox 只有700 k左右，加上 agent 最后大小小于20M")]),t._v(" "),t._m(6),t._v(" "),t._m(7),n("p",[t._v("以上是挂载 sidecar 的 deployment.yaml 文件，以nginx 作为服务为例，主要是通过共享 volume 的方式挂载 agent，首先 initContainers 通过 sw-agent 卷挂载了 sw-agent-sidecar 中的 /skywalking/agent ，并且将上面构建好的镜像中的 agent 目录 cp 到了 /skywalking/agent 目录，完成之后 nginx 启动时也挂载了 sw-agent 卷，并将其挂载到了容器的 /usr/skywalking/agent 目录，这样就完成了共享过程。")]),t._v(" "),n("h4",{attrs:{id:"总结"}},[t._v("总结")]),t._v(" "),n("p",[t._v("这样除去 ServiceMesh 以外，我能想到的方式就介绍完了，希望可以帮助到你。最后给 "),n("a",{attrs:{href:"https://github.com/apache/skywalking",target:"_blank",rel:"noopener noreferrer"}},[t._v("Skywalking 一个 Star 吧"),n("OutboundLink")],1),t._v("，国人的骄傲。")])])},[function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[this._v("使用官方提供的基础镜像")]),this._v(" "),a("li",[this._v("将 agent 包构建到已经存在的基础镜像中")]),this._v(" "),a("li",[this._v("sidecar 模式挂载 agent")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[this._v("wget https://www.apache.org/dyn/closer.cgi/skywalking/6.3.0/apache-skywalking-apm-6.3.0.tar.gz && tar -zxvf apache-skywalking-apm-6.3.0.tar.gz\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("li",[a("p",[this._v("通过以下 dockerfile 构建基础镜像")]),this._v(" "),a("div",{staticClass:"language-dockerfile extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[this._v("FROM alpine:3.8 \n\nENV LANG=C.UTF-8\n\nRUN set -eux && \\\n\tapk update && apk upgrade && \\\n\twget -q -O /etc/apk/keys/sgerrand.rsa.pub https://alpine-pkgs.sgerrand.com/sgerrand.rsa.pub &&\\\n        wget https://github.com/sgerrand/alpine-pkg-glibc/releases/download/2.30-r0/glibc-2.30-r0.apk &&\\\n        apk --no-cache add unzip vim curl git bash ca-certificates glibc-2.30-r0.apk file && \\\n\trm -rf /var/lib/apk/* &&\\\n        mkdir -p /usr/skywalking/agent/\n\n# A streamlined jre\nADD jdk1.8.0_221/ /usr/java/jdk1.8.0_221/\nADD apache-skywalking-apm-bin/agent/ /usr/skywalking/agent/\n\n# set env\nENV JAVA_HOME /usr/java/jdk1.8.0_221\nENV PATH ${PATH}:${JAVA_HOME}/bin\n\n# run container with base path:/\nWORKDIR /\n\nCMD bash\n")])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("strong",[this._v("构建 skywalking agent sidecar 镜像的方法")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[this._v("wget https://www.apache.org/dyn/closer.cgi/skywalking/6.3.0/apache-skywalking-apm-6.3.0.tar.gz && tar -zxvf apache-skywalking-apm-6.3.0.tar.gz\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("li",[a("p",[this._v("通过以下 dockerfile 进行构建")]),this._v(" "),a("div",{staticClass:"language-dockerfile extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[this._v("FROM busybox:latest \n\nENV LANG=C.UTF-8\n\nRUN set -eux && mkdir -p /usr/skywalking/agent/\n\nADD apache-skywalking-apm-bin/agent/ /usr/skywalking/agent/\n\nWORKDIR /\n")])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("strong",[this._v("如何使用 sidecar 呢？")])])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"language-yaml extra-class"},[n("pre",{pre:!0,attrs:{class:"language-yaml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" apps/v1\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Deployment\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("labels")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" demo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("sw\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" demo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("sw\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("replicas")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("selector")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("matchLabels")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" demo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("sw\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("template")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("labels")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" demo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("sw\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("initContainers")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" innerpeacez/sw"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("agent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("sidecar"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("latest\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" sw"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("agent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("sidecar\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("imagePullPolicy")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" IfNotPresent\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("command")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'sh'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("args")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'-c'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mkdir -p /skywalking/agent && cp -r /usr/skywalking/agent/* /skywalking/agent'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumeMounts")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mountPath")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /skywalking/agent\n          "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" sw"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("agent\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("containers")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("1.7.9\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumeMounts")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mountPath")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /usr/skywalking/agent\n          "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" sw"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("agent\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("containerPort")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" sw"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("agent\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("emptyDir")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);a.default=e.exports}}]);