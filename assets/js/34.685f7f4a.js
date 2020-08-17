(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{301:function(e,t,s){"use strict";s.r(t);var a=s(0),r=Object(a.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[s("h3",{attrs:{id:"使用-chart-部署-skywalking"}},[e._v("使用 chart 部署 skywalking")]),e._v(" "),s("ul",[s("li",[e._v("作者：innerpeacez")]),e._v(" "),s("li",[s("a",{attrs:{href:"https://ipzgo.top/2019-10-08-%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8-helm-chart-%E9%83%A8%E7%BD%B2-skywalking/",target:"_blank",rel:"noopener noreferrer"}},[e._v("原文地址"),s("OutboundLink")],1)])]),e._v(" "),s("p",[e._v("本文主要讲述的是如何使用 Helm Charts  将 SkyWalking 部署到 Kubernetes 集群中，相关文档可以参考"),s("a",{attrs:{href:"https://github.com/apache/skywalking-kubernetes",target:"_blank",rel:"noopener noreferrer"}},[e._v("skywalking-kubernetes "),s("OutboundLink")],1),e._v("和 "),s("a",{attrs:{href:"https://github.com/apache/skywalking/blob/master/docs/en/setup/backend/backend-k8s.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("backend-k8s 文档"),s("OutboundLink")],1),e._v(" 。")]),e._v(" "),s("p",[e._v("目前推荐的四种方式：")]),e._v(" "),e._m(0),e._v(" "),s("p",[e._v("注意：目前 skywalking 的 chart 还没有提交到官方仓库，请先参照前三种方式进行部署")]),e._v(" "),s("h4",{attrs:{id:"helm-2-提供的-helm-serve"}},[e._v("Helm 2 提供的 helm serve")]),e._v(" "),e._m(1),e._v(" "),s("p",[e._v("1.配置 helm 环境，"),s("a",{attrs:{href:"https://ipzgo.top/2019-07-26-Windows-%E4%BD%BF%E7%94%A8-helm3-%E5%92%8C-kubectl/",target:"_blank",rel:"noopener noreferrer"}},[e._v("参考 Helm 环境配置"),s("OutboundLink")],1),e._v(" ，如果你要部署 helm2 相关 chart 可以直接配置 helm2 的相关环境")]),e._v(" "),s("p",[e._v("2.克隆/下载ZIP "),s("a",{attrs:{href:"https://github.com/apache/skywalking-kubernetes",target:"_blank",rel:"noopener noreferrer"}},[s("strong",[e._v("skywalking-kubernetes")]),s("OutboundLink")],1),e._v(" 这个仓库，仓库关于chart的目录结构如下")]),e._v(" "),e._m(2),e._v(" "),s("p",[e._v("克隆/下载ZIP 完成后进入指定目录打包对应版本的chart")]),e._v(" "),e._m(3),s("p",[e._v("注意：helm-version 为对应的 helm 版本目录，skywalking-version 为对应的 skywalking 版本目录，下面以helm3 和 skywalking 6.3.0 为例")]),e._v(" "),e._m(4),s("p",[e._v("3.由于skywalking 依赖 elasticsearch 作为存储库，执行以下命令更新依赖，默认会从官方repo进行拉取")]),e._v(" "),e._m(5),e._m(6),e._v(" "),s("p",[e._v("如果官方 repo 不存在，请先添加官方仓库")]),e._v(" "),e._m(7),e._m(8),e._v(" "),s("p",[e._v("4.打包 skywalking , 执行以下命令")]),e._v(" "),e._m(9),e._m(10),e._v(" "),s("p",[e._v("打包完成后会在当前目录的同级目录生成 .tgz 文件")]),e._v(" "),e._m(11),e._m(12),e._v(" "),s("h5",{attrs:{id:"启动-helm-serve"}},[e._v("启动 helm serve")]),e._v(" "),s("p",[e._v("由于上文配置的 helm 为 helm3 ,但是 helm 3中移除了 helm serve 的相关命令，所以需要另外一个环境配置helm2 的相关环境，"),s("a",{attrs:{href:"https://github.com/helm/helm/releases/tag/v2.14.3",target:"_blank",rel:"noopener noreferrer"}},[e._v("下载 helm 2.14.3 的二进制文件"),s("OutboundLink")],1),e._v("，配置基本上没有大的差别，不在赘述")]),e._v(" "),s("p",[e._v("初始化 helm")]),e._v(" "),e._m(13),e._m(14),e._v(" "),e._m(15),s("p",[e._v("注意： ip 为要能够被上文配置 helm 3 环境的机器访问到")]),e._v(" "),s("p",[e._v("可以访问一下看看服务 serve 是否启动成功")]),e._v(" "),e._m(16),s("h5",{attrs:{id:"部署-skywalking"}},[e._v("部署 skywalking")]),e._v(" "),s("p",[e._v("1.在helm3 环境中添加启动的本地 repo")]),e._v(" "),e._m(17),s("p",[e._v("2.查看 skywalking chart 是否存在于本地仓库中")]),e._v(" "),e._m(18),e._m(19),e._v(" "),s("p",[e._v("3.部署")]),e._v(" "),e._m(20),s("p",[e._v("这样 skywalking 就部署到了 k8s 集群中的 test 命名空间了，至此本地安装skywalking 就完成了。")]),e._v(" "),s("h4",{attrs:{id:"本地文件部署"}},[e._v("本地文件部署")]),e._v(" "),s("p",[e._v("如果你不想存储到 chart 到仓库中也可以直接使用本地文件部署 skywalking,按照上面的步骤将skywalking chart 打包完成之后，直接使用以下命令进行部署")]),e._v(" "),e._m(21),s("h4",{attrs:{id:"harbor-作为-repo-存储-charts"}},[e._v("harbor 作为 repo 存储 charts")]),e._v(" "),s("p",[e._v("harbor 目前已经提供了，charts repo 的能力，这样就可以将 docker 镜像和 chart 存储在一个仓库中了，方便维护，具体harbor 的部署方法参考 "),s("a",{attrs:{href:"https://ipzgo.top/2019-07-26-Helm-3-%E4%BD%BF%E7%94%A8-harbor-%E4%BD%9C%E4%B8%BA%E4%BB%93%E5%BA%93%E5%AD%98%E5%82%A8-charts/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Harbor 作为存储仓库存储 chart"),s("OutboundLink")],1)]),e._v(" "),s("h4",{attrs:{id:"官方-repo-部署"}},[e._v("官方 repo 部署")]),e._v(" "),s("p",[e._v("目前没有发布到官方 repo 中，后续发布完成后，只需要执行下面命令即可")]),e._v(" "),e._m(22),s("h3",{attrs:{id:"总结"}},[e._v("总结")]),e._v(" "),s("p",[e._v("四种方式都可以进行部署，如果你想要自定义 chart ,需要使用上述两种本地方法及 harbor 存储的方式，以便你修改好 chart 之后进行部署.")])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("使用 helm 2 提供的 helm serve 启动本地 helm repo")]),this._v(" "),t("li",[this._v("使用本地 chart 文件部署")]),this._v(" "),t("li",[this._v("使用 harbor 提供的 repo 功能")]),this._v(" "),t("li",[this._v("直接从官方 repo 进行部署")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h5",{attrs:{id:"打包对应版本的-skywalking-chart"}},[t("strong",[this._v("打包对应版本的 skywalking chart")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("blockquote",[s("p",[e._v("helm-chart")]),e._v(" "),s("ul",[s("li",[e._v("helm2\n"),s("ul",[s("li",[e._v("6.0.0-GA")]),e._v(" "),s("li",[e._v("6.1.0")])])]),e._v(" "),s("li",[e._v("helm3\n"),s("ul",[s("li",[e._v("6.3.0")]),e._v(" "),s("li",[e._v("6.4.0")])])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("cd skywalking-kubernetes/helm-chart/<helm-version>/<skywalking-version>\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("cd skywalking-kubernetes/helm-chart/helm3/6.3.0\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("helm dep up skywalking\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v('Hang tight while we grab the latest from your chart repositories...\n...Successfully got an update from the "stable" chart repository\nUpdate Complete. ⎈Happy Helming!⎈\nSaving 1 charts\nDownloading elasticsearch from repo https://kubernetes-charts.storage.googleapis.com/\nDeleting outdated charts')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("helm repo add stable https://kubernetes-charts.storage.googleapis.com\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v('"stable" has been added to your repositories')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("helm package skywalking/\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("Successfully packaged chart and saved it to: C:\\code\\innerpeacez_github\\skywalking-kubernetes\\helm-chart\\helm3\\6.3.0\\skywalking-0.1.0.tgz")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v(" ls\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("skywalking/  skywalking-0.1.0.tgz")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-shelm extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("helm init\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("将上文生成的 "),t("strong",[this._v("skywalking-0.1.0.tgz")]),this._v(" 文件复制到 helm 相关目录 "),t("code",[this._v("/root/.helm/repository/local")]),this._v(",启动 serve")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("helm serve --address <ip>:8879 --repo-path /root/.helm/repository/local\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("curl ip:8879\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("helm repo add local http://<ip>:8879\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("helm search skywalking\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("NAME             \tCHART VERSION\tAPP VERSION\tDESCRIPTION"),t("br"),this._v("\nlocal/skywalking \t0.1.0        \t6.3.0      \tApache SkyWalking APM System")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("helm -n test install skywalking local/skywalking\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("helm -n test install skywalking skywalking-0.1.0.tgz\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("helm install -n test stable/skywalking\n")])])])}],!1,null,null,null);t.default=r.exports}}]);