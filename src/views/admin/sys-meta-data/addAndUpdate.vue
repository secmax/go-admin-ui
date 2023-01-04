<template>
  <BasicLayout>
    <template #wrapper>
      <el-card class="box-card">
        <el-form ref="form" :model="form" :rules="rules" label-width="80px">
          <el-row>
            <el-col :span="24">
              <el-form-item label="元数据名称" prop="deptName">
                <el-input v-model="form.metaDataName" placeholder="请输入元数据名称" />
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
        <div class="dialog-footer">
          <el-button type="primary" @click="submitForm">确 定</el-button>
          <el-button @click="cancel">取 消</el-button>
        </div>
      </el-card>
    </template>
  </BasicLayout>
</template>
<script>
import { getMetaData, addMetaData, updateMetaData } from '@/api/admin/sys-meta-data'

export default {
  name: 'SysMetaDataUpdate',
  data() {
    return {
      // 表格树数据
      dataList: [],
      // 标题
      title: '',
      isEdit: false,
      // 表单参数
      form: {
      },
      // 表单校验
      rules: {
      }
    }
  },
  created() {
  },
  methods: {
    // 取消按钮
    cancel() {
      this.open = false
      this.reset()
    },
    // 表单重置
    reset() {
      this.form = {
        metaDataId: undefined,
        parentId: undefined,
        metaDataName: undefined,
        status: '1'
      }
    },
    /** 修改按钮操作 */
    handleUpdate(id) {
      this.reset()
      getMetaData(id).then(response => {
        this.form = response.data
        this.form.status = String(this.form.status)
        this.open = true
        this.title = '修改'
        this.isEdit = true
      })
    },
    /** 提交按钮 */
    submitForm: function() {
      this.$refs['form'].validate(valid => {
        if (valid) {
          this.form.status = 1
          if (this.form.metaDataId !== undefined) {
            updateMetaData(this.form, this.form.metaDataId).then(response => {
              if (response.code === 200) {
                this.msgSuccess(response.msg)
              } else {
                this.msgError(response.msg)
              }
            })
          } else {
            addMetaData(this.form).then(response => {
              if (response.code === 200) {
                this.msgSuccess(response.msg)
              } else {
                this.msgError(response.msg)
              }
            })
          }
        }
      })
    }
  }
}
</script>
