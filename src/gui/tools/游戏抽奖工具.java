/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package gui.tools;

import database.DBConPool;

import javax.swing.*;
import javax.swing.table.DefaultTableModel;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author Administrator
 */
public class 游戏抽奖工具 extends javax.swing.JFrame {

    /**
     * Creates new form 锻造控制台
     */
    public 游戏抽奖工具() {
        ImageIcon icon = new ImageIcon(getClass().getClassLoader().getResource("image2/logo.png"));
        setIconImage(icon.getImage());
        setTitle("游戏抽奖工具");
        initComponents();
    }

    /**
     * This method is called from within the constructor to initialize the form.
     * WARNING: Do NOT modify this code. The content of this method is always
     * regenerated by the Form Editor.
     */
    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        删除NPC = new javax.swing.JPanel();
        jScrollPane106 = new javax.swing.JScrollPane();
        游戏抽奖 = new javax.swing.JTable();
        刷新游戏抽奖 = new javax.swing.JButton();
        删除游戏抽奖代码 = new javax.swing.JTextField();
        删除游戏抽奖 = new javax.swing.JButton();
        jLabel336 = new javax.swing.JLabel();
        jLabel285 = new javax.swing.JLabel();

        setResizable(false);
        getContentPane().setLayout(new org.netbeans.lib.awtextra.AbsoluteLayout());

        删除NPC.setBorder(javax.swing.BorderFactory.createTitledBorder(null, "游戏抽奖管理工具", javax.swing.border.TitledBorder.DEFAULT_JUSTIFICATION, javax.swing.border.TitledBorder.TOP, new java.awt.Font("幼圆", 0, 24))); // NOI18N
        删除NPC.setLayout(new org.netbeans.lib.awtextra.AbsoluteLayout());

        游戏抽奖.setModel(new javax.swing.table.DefaultTableModel(
            new Object [][] {

            },
            new String [] {
                "物品代码", "名称"
            }
        ) {
            boolean[] canEdit = new boolean [] {
                false, false
            };

            public boolean isCellEditable(int rowIndex, int columnIndex) {
                return canEdit [columnIndex];
            }
        });
        jScrollPane106.setViewportView(游戏抽奖);

        删除NPC.add(jScrollPane106, new org.netbeans.lib.awtextra.AbsoluteConstraints(10, 30, 570, 420));

        刷新游戏抽奖.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        刷新游戏抽奖.setText("刷新列表");
        刷新游戏抽奖.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                刷新游戏抽奖ActionPerformed(evt);
            }
        });
        删除NPC.add(刷新游戏抽奖, new org.netbeans.lib.awtextra.AbsoluteConstraints(390, 470, 100, 30));
        删除NPC.add(删除游戏抽奖代码, new org.netbeans.lib.awtextra.AbsoluteConstraints(200, 470, 80, 30));

        删除游戏抽奖.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        删除游戏抽奖.setText("删除");
        删除游戏抽奖.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                删除游戏抽奖ActionPerformed(evt);
            }
        });
        删除NPC.add(删除游戏抽奖, new org.netbeans.lib.awtextra.AbsoluteConstraints(300, 470, 80, 30));

        jLabel336.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        jLabel336.setText("物品代码:");
        删除NPC.add(jLabel336, new org.netbeans.lib.awtextra.AbsoluteConstraints(130, 470, -1, 30));

        jLabel285.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        jLabel285.setForeground(new java.awt.Color(255, 51, 51));
        jLabel285.setText("提示:删除GM用指令添加的物品道具");
        删除NPC.add(jLabel285, new org.netbeans.lib.awtextra.AbsoluteConstraints(170, 450, -1, 20));

        getContentPane().add(删除NPC, new org.netbeans.lib.awtextra.AbsoluteConstraints(0, 0, 590, 520));

        pack();
        setLocationRelativeTo(null);
    }// </editor-fold>//GEN-END:initComponents

    private void 刷新游戏抽奖ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_刷新游戏抽奖ActionPerformed
        刷新游戏抽奖();        // TODO add your handling code here:
    }//GEN-LAST:event_刷新游戏抽奖ActionPerformed

    private void 删除游戏抽奖ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_删除游戏抽奖ActionPerformed
        PreparedStatement ps1 = null;
        ResultSet rs = null;
        boolean result1 = this.删除游戏抽奖代码.getText().matches("[0-9]+");

        if (result1) {
            if (Integer.parseInt(this.删除游戏抽奖代码.getText()) < 0) {
                JOptionPane.showMessageDialog(null, "请填写正确的值");
            }
            try {

                ps1 = DBConPool.getInstance().getDataSource().getConnection().prepareStatement("SELECT * FROM gashapon_items WHERE itemid = ?");
                ps1.setInt(1, Integer.parseInt(this.删除游戏抽奖代码.getText()));
                rs = ps1.executeQuery();
                if (rs.next()) {
                    String sqlstr = " delete from gashapon_items where itemid =" + Integer.parseInt(this.删除游戏抽奖代码.getText()) + "";
                    ps1.executeUpdate(sqlstr);
                    JOptionPane.showMessageDialog(null, "成功删除 " + Integer.parseInt(this.删除游戏抽奖代码.getText()) + " 物品.重启生效。");
                    刷新游戏抽奖();

                }
            } catch (SQLException ex) {
                Logger.getLogger(游戏抽奖工具.class.getName()).log(Level.SEVERE, null, ex);
            }
        } else {
            JOptionPane.showMessageDialog(null, "请输入数字 ");
        }
    }//GEN-LAST:event_删除游戏抽奖ActionPerformed
    public void 刷新游戏抽奖() {
        for (int i = ((DefaultTableModel) (this.游戏抽奖.getModel())).getRowCount() - 1; i >= 0; i--) {
            ((DefaultTableModel) (this.游戏抽奖.getModel())).removeRow(i);
        }
        try {
            Connection con = DBConPool.getInstance().getDataSource().getConnection();
            PreparedStatement ps = null;
            ResultSet rs = null;
            ps = con.prepareStatement("SELECT * FROM gashapon_items");
            rs = ps.executeQuery();
            while (rs.next()) {
                ((DefaultTableModel) 游戏抽奖.getModel()).insertRow(游戏抽奖.getRowCount(), new Object[]{rs.getInt("itemid"), rs.getString("name")});
            }
        } catch (SQLException ex) {
            Logger.getLogger(游戏抽奖工具.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JLabel jLabel285;
    private javax.swing.JLabel jLabel336;
    private javax.swing.JScrollPane jScrollPane106;
    private javax.swing.JPanel 删除NPC;
    private javax.swing.JButton 删除游戏抽奖;
    private javax.swing.JTextField 删除游戏抽奖代码;
    private javax.swing.JButton 刷新游戏抽奖;
    private javax.swing.JTable 游戏抽奖;
    // End of variables declaration//GEN-END:variables
}
