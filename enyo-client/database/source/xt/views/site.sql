DO $$
  var dropSql = "drop view if exists xt.site cascade;";
  var sql = "create or replace view xt.site as " +
  "select * " +
  "from site(); ";

  try {
    plv8.execute(sql);
  } catch (error) {
    /* let's cascade-drop the view and try again */
    plv8.execute(dropSql);
    plv8.execute(sql);
  }

$$ language plv8;
          
revoke all on xt.site from public;
grant all on table xt.site to group xtrole;

create or replace rule "_INSERT" as on insert to xt.site do instead

insert into whsinfo (
  warehous_id,
  warehous_code,
  warehous_descrip,
  warehous_fob,
  warehous_active,
  warehous_counttag_prefix,
  warehous_counttag_number,
  warehous_bol_prefix,
  warehous_bol_number,
  warehous_shipping,
  warehous_useslips,
  warehous_usezones,
  warehous_aislesize,
  warehous_aislealpha,
  warehous_racksize,
  warehous_rackalpha,
  warehous_binsize,
  warehous_binalpha,
  warehous_locationsize,
  warehous_locationalpha,
  warehous_enforcearbl,
  warehous_default_accnt_id,
  warehous_shipping_commission,
  warehous_cntct_id,
  warehous_addr_id,
  warehous_transit,
  warehous_shipform_id,
  warehous_shipvia_id,
  warehous_shipcomments,
  warehous_costcat_id,
  warehous_sitetype_id,
  warehous_taxzone_id,
  warehous_sequence
) values (
  new.warehous_id,
  new.warehous_code,
  new.warehous_descrip,
  new.warehous_fob,
  new.warehous_active,
  new.warehous_counttag_prefix,
  new.warehous_counttag_number,
  new.warehous_bol_prefix,
  new.warehous_bol_number,
  new.warehous_shipping,
  new.warehous_useslips,
  new.warehous_usezones,
  new.warehous_aislesize,
  new.warehous_aislealpha,
  new.warehous_racksize,
  new.warehous_rackalpha,
  new.warehous_binsize,
  new.warehous_binalpha,
  new.warehous_locationsize,
  new.warehous_locationalpha,
  new.warehous_enforcearbl,
  new.warehous_default_accnt_id,
  new.warehous_shipping_commission,
  new.warehous_cntct_id,
  new.warehous_addr_id,
  new.warehous_transit,
  new.warehous_shipform_id,
  new.warehous_shipvia_id,
  new.warehous_shipcomments,
  new.warehous_costcat_id,
  new.warehous_sitetype_id,
  new.warehous_taxzone_id,
  new.warehous_sequence
);

create or replace rule "_UPDATE" as on update to xt.site do instead

update whsinfo set
  warehous_code=new.warehous_code,
  warehous_descrip=new.warehous_descrip,
  warehous_fob=new.warehous_fob,
  warehous_active=new.warehous_active,
  warehous_counttag_prefix=new.warehous_counttag_prefix,
  warehous_counttag_number=new.warehous_counttag_number,
  warehous_bol_prefix=new.warehous_bol_prefix,
  warehous_bol_number=new.warehous_bol_number,
  warehous_shipping=new.warehous_shipping,
  warehous_useslips=new.warehous_useslips,
  warehous_usezones=new.warehous_usezones,
  warehous_aislesize=new.warehous_aislesize,
  warehous_aislealpha=new.warehous_aislealpha,
  warehous_racksize=new.warehous_racksize,
  warehous_rackalpha=new.warehous_rackalpha,
  warehous_binsize=new.warehous_binsize,
  warehous_binalpha=new.warehous_binalpha,
  warehous_locationsize=new.warehous_locationsize,
  warehous_locationalpha=new.warehous_locationalpha,
  warehous_enforcearbl=new.warehous_enforcearbl,
  warehous_default_accnt_id=warehous_default_accnt_id,
  warehous_shipping_commission=new.warehous_shipping_commission,
  warehous_cntct_id=new.warehous_cntct_id,
  warehous_addr_id=new.warehous_addr_id,
  warehous_transit=new.warehous_transit,
  warehous_shipform_id=new.warehous_shipform_id,
  warehous_shipvia_id=new.warehous_shipvia_id,
  warehous_shipcomments=new.warehous_shipcomments,
  warehous_costcat_id=new.warehous_costcat_id,
  warehous_sitetype_id=new.warehous_sitetype_id,
  warehous_taxzone_id=new.warehous_taxzone_id,
  warehous_sequence=new.warehous_sequence
where warehous_id = old.warehous_id;

create or replace rule "_DELETE" as on delete to xt.site do instead

delete from whsinfo where warehous_id = old.warehous_id;
